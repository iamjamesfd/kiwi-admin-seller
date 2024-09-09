import { defineStore } from "pinia";

import { toQueryString, toCamelCase, getActionDescription } from "@/utils";

import {
  ActionRequestOptions,
  RequestOptions,
  ICommonStoreStateBase,
} from "@/types/api";

import { StringMap } from "@/types";

import { UNEXPECTED_ERROR, axe } from ".";

const axios = axe();
const TOAST_LIFETIME = 5000;
const emptyCallback = () => {};

interface ToastData {
  title: string;
  body: string;
  status: string;
}

interface IStoreState extends ICommonStoreStateBase {
  data: any | null;
  [key: string]: any;
}

interface StoreExtensions {
  state?: () => Partial<IStoreState>;
  actions?: Record<string, Function>;
  getters?: Record<string, Function>;
}

interface ServerActionConfig {
  detail: boolean; // whether the action is on a specific item (requires ID)
  method: "GET" | "POST" | "PUT" | "DELETE"; // HTTP method
  requiresData?: boolean; // whether the action requires data to be sent
}

interface ServerActionsConfig {
  [actionName: string]: ServerActionConfig;
}

interface Serializer {
  toExternal?: (data: any) => any;
  toInternal?: (data: any) => any;
}

interface Serializers {
  [methodName: string]: Serializer;
}

interface SerializationManager {
  toExternal: (method: string, data: any) => any;
  toInternal: (method: string, data: any) => any;
}

export type ServerActionCallback = (
  id?: string | number,
  data?: any,
  options?: {
    successText?: string | ((storeLabel: string | undefined) => string);
    errorText?: string | ((storeLabel: string | undefined) => string);
  }
) => Promise<any>;

type ServerActionGeneratorConfig = {
  baseUrl: string;
  serializers: Serializers;
  serverActions: ServerActionsConfig;
  toastsEnabled: boolean;
  toastManager: any;
};

interface FactoryConfig {
  storeLabel: string;
  mainDataKey: string;
  useToasts: boolean;
}

interface StoreFactoryToast {
  onToast: (data: ToastData) => void;
  lifetime: number;
}

export class StoreFactory {
  public toast;

  constructor(toast: Partial<StoreFactoryToast> = {}) {
    this.toast = toast;
  }
  #useToast(
    lf = 3000,
    toastCallback: (
      { title, body, status }: ToastData,
      life: number
    ) => void = () => {}
  ) {
    return {
      toast({ title, body, status }: ToastData, life: number = lf) {
        toastCallback({ title, body, status } as ToastData, life);
      },
      info({ title, body }: Omit<ToastData, "status">, life: number = lf) {
        this.toast({ title, body, status: "info" }, life);
      },
      error({ title, body }: Omit<ToastData, "status">, life: number = lf) {
        this.toast({ title, body, status: "error" }, life);
      },
      success({ title, body }: Omit<ToastData, "status">, life: number = lf) {
        this.toast({ title, body, status: "success" }, life);
      },
    };
  }

  #createSerializationManager(serializers: Serializers): SerializationManager {
    return {
      toExternal(method: string, data: any) {
        return (serializers[method]?.toExternal ?? ((data: any) => data))(data);
      },
      toInternal(method: string, data: any) {
        return (serializers[method]?.toInternal ?? ((data: any) => data))(data);
      },
    };
  }

  #generateServerActions({
    baseUrl,
    serializers,
    serverActions,
    toastsEnabled,
    toastManager,
  }: ServerActionGeneratorConfig) {
    var generatedActions: Record<string, ServerActionCallback> = {};
    var serializationManager = this.#createSerializationManager(serializers);
    for (const [actionName, config] of Object.entries(serverActions)) {
      const functionName = toCamelCase(actionName);

      generatedActions[functionName] = async function (
        id,
        data,
        { successText, errorText } = {}
      ) {
        var responseData: null | any = null,
          err: null | any = null;
        data = serializationManager.toExternal(functionName, data);
        let url = `/${baseUrl}`;
        if (config.detail && id) {
          url += `/${id}/${actionName}/`;
        } else if (!config.detail) {
          url += `/${actionName}/`;
        }

        let response;
        try {
          if (config.method === "GET") {
            response = await axios.get(url);
          } else if (config.method === "POST") {
            response = await axios.post(
              url,
              config.requiresData ? data : undefined
            );
          } else if (config.method === "PUT") {
            response = await axios.put(
              url,
              config.requiresData ? data : undefined
            );
          } else if (config.method === "DELETE") {
            response = await axios.delete(url);
          }

          if (response) {
            responseData = serializationManager.toInternal(
              functionName,
              response.data
            );
          }

          if (toastsEnabled) {
            toastManager.success(
              getActionDescription({
                status: "success",
                type: "action",
                modelName: baseUrl,
                customBodyText({ modelName }) {
                  return typeof successText === "function"
                    ? successText(modelName)
                    : successText ||
                        `Successfully executed ${modelName} ${actionName}`;
                },
              }),
              TOAST_LIFETIME
            );
          }
        } catch (error: any) {
          err = error.response?.data || error;
          if (toastsEnabled) {
            toastManager.error(
              getActionDescription({
                status: "error",
                type: "action",
                modelName: baseUrl,
                customBodyText({ modelName }) {
                  return typeof errorText === "function"
                    ? errorText(modelName)
                    : errorText ||
                        `Error while executing ${actionName} of ${modelName}`;
                },
              }),
              TOAST_LIFETIME
            );
          }
        }

        return [responseData, err];
      };
    }

    return generatedActions;
  }

  createStore(
    baseUrl: string,
    config: Partial<FactoryConfig> = {},
    serializers: Serializers = {},
    serverActions: ServerActionsConfig = {},
    extensions: StoreExtensions = {}
  ) {
    const toast = this.#useToast(
      this.toast?.lifetime || 5000,
      this.toast?.onToast || emptyCallback
    );
    const serializationManager = this.#createSerializationManager(serializers);
    var generatedActions = this.#generateServerActions({
      baseUrl,
      serializers,
      serverActions,
      toastsEnabled: config.useToasts ? true : false,
      toastManager: toast,
    });

    return defineStore(baseUrl, {
      state: (): IStoreState => ({
        data: null,
        _lastQuery: null,
        storeLabel: config.storeLabel || `"${baseUrl}"`,
        loading: false,
        error: null,
        ...(extensions.state ? extensions.state() : {}),
      }),
      actions: {
        async fetchData(
          query: StringMap,
          reqOptions: Partial<RequestOptions> = {
            loader: true,
            mergeQueries: true,
          }
        ) {
          var mergedQuery = { ...this._lastQuery, ...query };
          const q = toQueryString(mergedQuery);
          if (reqOptions.loader) this.loaderStore.startLoading();
          this.loading = true;
          if (reqOptions.mergeQueries) this._lastQuery = mergedQuery;
          return axios
            .get(`${baseUrl}${q}`)
            .then((response) => {
              this.data = serializationManager.toInternal(
                "fetchData",
                response.data
              );
              console.log(this.data);
            })
            .catch((err) => {
              this.error = err;
              console.error(err);
            })
            .finally(() => {
              this.loading = false;
              if (reqOptions.loader) this.loaderStore.stopLoading();
            });
        },
        _data() {
          return config.mainDataKey ? this.data[config.mainDataKey] : this.data;
        },

        _remove(id: string) {
          var index = this._findIndex(id);

          if (index != -1) this._data().splice(index, 1);
        },

        _findIndex(id: string) {
          return this._data()?.findIndex((item: any) => item.id === id);
        },

        _update(id: string, responseData: any) {
          if (!this.data) return;

          const index = this._findIndex(id);

          if (index == -1) return;

          this._data()[index] = {
            ...this._data()[index],
            ...responseData,
          };
        },

        async update(
          id: string,
          data: any,
          reqOptions: ActionRequestOptions = {
            loader: false,
          }
        ) {
          if (reqOptions.loader) this.loaderStore.startLoading();
          this.loading = true;

          data = serializationManager.toExternal("create", data);

          var responseData, err;
          await axios
            .patch(`/${baseUrl}/${id}/`, data)
            .then((response) => {
              var serializedData = serializationManager.toInternal(
                "update",
                response.data
              );
              this._update(id, serializedData);
              responseData = serializedData;
            })
            .catch((reason) => {
              responseData = null;
              err = reason.response ? reason.response.data : UNEXPECTED_ERROR;
            })
            .finally(() => {
              if (reqOptions.loader) this.loaderStore.stopLoading();
              this.loading = false;
            });

          if (responseData && config.useToasts) {
            toast.success(
              getActionDescription({
                status: "success",
                type: "update",
                modelName: this.storeLabel,
              })
            );
          } else {
            toast.error(
              getActionDescription({
                status: "error",
                type: "update",
                modelName: this.storeLabel,
                error: responseData,
              })
            );
          }
          return [responseData, err];
        },

        async create(
          data: any,
          reqOptions: ActionRequestOptions = {
            loader: false,
          }
        ) {
          if (reqOptions.loader) this.loaderStore.startLoading();
          this.loading = true;

          data = serializationManager.toExternal("create", data);

          var responseData, err;
          await axios
            .post(`/${baseUrl}/`, data)
            .then((response) => {
              var serializedData = serializationManager.toInternal(
                "create",
                response.data
              );
              this._data().unshift(serializedData);
              responseData = serializedData;
            })
            .catch((reason) => {
              responseData = null;
              err = reason.response ? reason.response.data : UNEXPECTED_ERROR;
            })
            .finally(() => {
              if (reqOptions.loader) this.loaderStore.stopLoading();
              this.loading = false;
            });

          if (responseData && config.useToasts) {
            toast.success(
              getActionDescription({
                status: "success",
                type: "create",
                modelName: this.storeLabel,
              })
            );
          } else {
            toast.error(
              getActionDescription({
                status: "error",
                type: "create",
                modelName: this.storeLabel,
                error: responseData,
              })
            );
          }
          return [responseData, err];
        },

        async delete(
          id: string,
          reqOptions: ActionRequestOptions = { loader: false }
        ) {
          var responseData, err;
          if (reqOptions.loader) this.loaderStore.startLoading("Deleting AD");

          this.loading = true;
          await axios
            .delete(`/${baseUrl}/${id}/`)
            .then((response) => {
              this._remove(id);
              responseData = serializationManager.toInternal(
                "delete",
                response.data
              );
            })
            .catch((reason) => {
              err = reason.response ? reason.response.data : UNEXPECTED_ERROR;
            })
            .finally(() => {
              this.loading = false;
              if (reqOptions.loader) this.loaderStore.stopLoading();
            });

          if (responseData && config.useToasts) {
            toast.success(
              getActionDescription({
                status: "success",
                type: "delete",
                modelName: this.storeLabel,
              })
            );
          } else {
            toast.error(
              getActionDescription({
                status: "error",
                type: "delete",
                modelName: this.storeLabel,
                error: responseData,
              })
            );
          }
          return [responseData, err];
        },

        async getOne(
          id: string,
          reqOptions: Partial<RequestOptions> = {
            loader: false,
            useCache: true,
          }
        ) {
          var responseData, err;
          var index = this._findIndex(id);
          if (reqOptions.useCache && index != -1) {
            responseData = this._data()[index];
            return [responseData, err];
          }
          if (reqOptions.loader) this.loaderStore.startLoading();
          this.loading = true;

          await axios
            .get(`/${baseUrl}/${id}/`)
            .then((response) => {
              responseData = serializationManager.toInternal(
                "getOne",
                response.data
              );
            })
            .catch((reason) => {
              err = reason.response ? reason.response.data : UNEXPECTED_ERROR;
            })
            .finally(() => {
              this.loading = false;
              if (reqOptions.loader) this.loaderStore.stopLoading();
            });
          return [responseData, err];
        },

        ...generatedActions,
        ...(extensions.actions || {}),
      },
      getters: {
        items: (state: IStoreState) => state.data,
        ...(extensions.getters || {}),
      },
    });
  }
}
