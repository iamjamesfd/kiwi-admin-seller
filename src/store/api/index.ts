import axios from "axios";
import { SITE_CONF } from "@/store";
import { getToken } from "@/utils";
interface IAxiosArgs {
  hasAuthHeaders?: boolean;
  hasOrigin?: boolean;
}

export const axe = (
  opt: IAxiosArgs = { hasOrigin: true, hasAuthHeaders: true }
) => {
  var options = {};

  Object.assign(options, { baseURL: SITE_CONF.API_ORIGIN });

  const instance = axios.create(options);

  if (opt.hasAuthHeaders)
    instance.defaults.headers.common["Authorization"] =
      `Bearer ${getToken().access}`;

  return instance;
};

export const DEFAULT_PER_PAGE = 20;
export const UNEXPECTED_ERROR = "Server xatoligi";
