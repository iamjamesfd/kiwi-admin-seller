import { extend } from "@vue/shared";

const component = extend({});
type VueComponent = InstanceType<typeof component>;

export default VueComponent;
export interface ISiteConf {
  API_ORIGIN: string;
  API_HOST: string;
  API_PROTOCOL: string;
}

export interface StringMap {
  [key: string]: string | number;
}
