import { defineStore } from "pinia";

interface ILoaderState {
  show: boolean;
  error: string | null;
  label: string | null;
}

const defaultState: ILoaderState = { show: false, error: null, label: null };

export default defineStore("loader", {
  state: (): ILoaderState => defaultState,
  actions: {
    startLoading(label?: string | null, error?: string | null) {
      this.show = true;
      this.error = error ? error : null;
      this.label = label ? label : null;
    },
    stopLoading() {
      this.show = false;
    },
  },
});
