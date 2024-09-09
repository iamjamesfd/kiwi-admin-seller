import { Router } from "vue-router";
import useLoaderStore from "./store/useLoaderStore";
import { useToast } from "./utils";

declare module "pinia" {
  export interface PiniaCustomProperties {
    loaderStore: useLoaderStore;
    toast: typeof useToast
  }
}
