import {defineStore} from "pinia";
import {axe} from "@/store/api";
import type {ICommonStoreStateBase, RequestOptions} from "@/types/api";
import {groupByKey, toQueryString} from "@/utils";
import {StringMap} from "@/types";
import {app} from "@/main";
import type {Notification} from "@/types/api/models";

const axios = axe();
type IResponse = Notification[];

interface IStoreState extends ICommonStoreStateBase {
  data: IResponse | null;
  _notificationTokens: any | null;
  _user_notifications: IResponse | null;
  notification_token: string;
  _lastQuery: StringMap | null;
}

const defaultState: IStoreState = {
  error: null,
  notification_token: "c65de643-9c96-4740-9e6c-7fd8abd8a583",
  loading: false,
  data: null,
  _user_notifications: null,
  _notificationTokens: null,
  _lastQuery: null,
};

export default defineStore("notification", {
  state: (): IStoreState => defaultState,
  actions: {
    showNotification(
      title: string,
      body: string,
      image?: string,
      payload?: any
    ) {
      const toast = app.config.globalProperties.$toast;
      toast.add({
        severity: "secondary",
        summary: title,
        detail: body,
        closable: true,
        life: 10 * 1000,
        group: "notification",
      });
    },
    async fetchUserNotifications() {
      return this.fetchData({tokens: this.notification_token});
    },

    async sendNotification(data: any) {
      data.notification_type = "NM";

      return axios.post("/notifications/", data);
    },
    async find(
      id: string,
      reqOptions: Partial<RequestOptions> = {loader: false}
    ) {
      const _exists = this.notifications?.find((a) => a.id === id);
      if (_exists) {
        return Promise.resolve(_exists);
      }
      if (reqOptions.loader)
        this.loaderStore.startLoading("Finding notification");
      this.loading = true;

      return axios
        .get(`/adv/${id}/`)
        .then((response) => {
          this.data?.push(response.data);
          return response.data;
        })
        .catch((reason) => {
          if (reason.response) {
            return reason.response.data;
          }
          return reason;
        })
        .finally(() => {
          this.loading = false;
          if (reqOptions.loader) this.loaderStore.stopLoading();
        });
    },
    async fetchData(
      query: StringMap,
      reqOptions: Partial<RequestOptions> = {loader: true}
    ) {
      var mergedQuery = {...this._lastQuery, ...query};
      const q = toQueryString(mergedQuery);
      if (reqOptions.loader)
        this.loaderStore.startLoading("Fetching notifications");
      this.loading = true;
      this._lastQuery = mergedQuery;
      return axios
        .get(`/notifications/${q}`)
        .then((response) => {
          if (mergedQuery.tokens) this._user_notifications = response.data;
          else this.data = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          this.error = err;
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
          this.loaderStore.stopLoading();
        });
    },
    async markAsRead(id: string) {
      var ok,
        responseData,
        notification = await this.find(id);

      if (notification.has_read) return {ok: true, responseData: null};

      await axios
        .post(`/notifications/${id}/read/`)
        .then((response) => {
          ok = true;
          responseData = response.data;
        })
        .catch((reason) => {
          ok = false;
          responseData = reason.request.data;
        });

      if (ok) {
        notification.has_read = true;
      }
      return {ok, responseData};
    },

    async fetchUserNotificationTokens(
      query: StringMap,
      reqOptions: RequestOptions = {loader: false, mergeQueries: true}
    ) {
      var mergedQuery = {...this._lastQuery, ...query};
      const q = toQueryString(mergedQuery);
      if (reqOptions.loader)
        this.loaderStore.startLoading("Fetching notifications");
      this.loading = true;
      this._lastQuery = mergedQuery;
      return axios
        .get(`/notification-tokens/${q}`)
        .then((response) => {
          this._notificationTokens = response.data;
        })
        .catch((err) => {
          this.error = err;
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
          this.loaderStore.stopLoading();
        });
    },
    hasUnreadNotifications(): boolean {
      if (!this.notifications) return false;

      return this.notifications?.some(
        (notification) => notification.has_read === false
      );
    },
  },
  getters: {
    userNotifications: (state) => state._user_notifications,
    notifications: (state) => state.data,
    notificationTokens: (state) => {
      if (!state._notificationTokens) {
        return null;
      }

      var serializeData = (data: any) => {
        return Object.keys(data).map((key) => {
          return {label: key, items: data[key]};
        });
      };
      return {
        ...state._notificationTokens,
        results: serializeData(
          groupByKey(
            state._notificationTokens.results,
            (item: any) => item.user ? item.user.username : ''
          )
        ),
      };
    },
  },
});
