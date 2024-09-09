/**
 * Returns a formatted string representation of a number with a specified separator between every three digits.
 * @param {number} value - The number to be formatted.
 * @param {string} [splitter=' '] - The separator to be inserted between every three digits. Default value is a space (' ').
 * @returns {string} - Formatted string representation of the input number with the specified separator between every three digits.
 */
const niceSum = (value: string, splitter: string = " "): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, splitter);
};

/**
 * Formats a given timestamp into a human-readable date and time format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @returns {object} - An object with functions `getTime`, `getMonth`, `getYear`, and `getTimeText` that provide the formatted time, month, year, and time text respectively.
 */

/**
 * Formats a given timestamp into a human-readable date and time format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @returns {object} - An object with functions `getTime`, `getMonth`, `getYear`, and `getTimeText` that provide the formatted time, month, year, and time text respectively.
 */
const formatDate = (
  timestamp: Date,
): {
  getTime: () => string;
  getMonth: () => string;
  getYear: () => number;
  getTimeText: () => string;
} => {
  if (!timestamp) {
    return {
      getTime: () => "",
      getMonth: () => "",
      getYear: () => 0,
      getTimeText: () => "",
    };
  }

  const date: Date = new Date(timestamp);

  const time: string = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const month: string = date.toLocaleString("default", {month: "long"});
  const year: number = date.getFullYear();

  const now: Date = new Date();
  const diffInMilliseconds: number = now.getTime() - date.getTime();
  const diffInMinutes: number = Math.floor(diffInMilliseconds / 60000);
  const diffInHours: number = Math.floor(diffInMilliseconds / 3600000);
  const diffInDays: number = Math.floor(diffInMilliseconds / 86400000);
  const diffInWeeks: number = Math.floor(diffInMilliseconds / 604800000);
  let timeText: string;

  if (diffInMinutes === 0) {
    timeText = "hozirgina";
  } else if (diffInMinutes <= 59) {
    timeText = `${diffInMinutes} daqiqa oldin`;
  } else if (diffInHours <= 12) {
    timeText = `${diffInHours} soat oldin`;
  } else if (diffInDays === 1) {
    timeText = "kecha";
  } else if (diffInDays === 0) {
    timeText = "bugun";
  } else if (diffInDays <= 3) {
    timeText = `${diffInDays} kun oldin`;
  } else if (diffInWeeks === 1) {
    timeText = "1 hafta oldin";
  } else {
    timeText = `${date.getDate()}-${month}`;
  }

  return {
    getTime: () => time,
    getMonth: () => month,
    getYear: () => year,
    getTimeText: () => timeText,
  };
};

/**
 * Truncates a string if its length is greater than or equal to the specified length,
 * appending an ellipsis at the end. Otherwise, returns the original string.
 *
 * @param {string} value - The input string to be truncated.
 * @param {number} [length=15] - The maximum length of the truncated string.
 * @returns {string} - The truncated or original string.
 */
const truncateText = (value: string, length: number = 15): string => {
  if (value.length >= length) {
    return value.slice(0, length) + "...";
  } else {
    return value;
  }
};

type GenerateDummyImageOptions = {
  size?: string;
  backgroundColor?: string;
  textColor?: string;
  format?: string;
  text?: string | null;
};

export const generateDummyImage = (
  options: GenerateDummyImageOptions = {},
): string => {
  const {
    size = "300x200",
    backgroundColor = "cccccc",
    textColor = "000000",
    format = "png",
    text = null,
    ...restOptions // Capture any additional options provided
  } = options;

  const mergedOptions = {
    size,
    backgroundColor,
    textColor,
    format,
    text,
    ...restOptions, // Merge any additional options with defaults
  };

  const {
    size: mergedSize,
    backgroundColor: mergedBg,
    textColor: mergedTextCol,
    format: mergedFormat,
    text: mergedText,
  } = mergedOptions;

  const API_URL = `https://dummyimage.com/${mergedSize}/${mergedBg}/${mergedTextCol}.${mergedFormat}&text=${mergedText}`;
  return API_URL;
};



import {DEFAULT_PER_PAGE} from "@/store/api";
import {StringMap} from "@/types";
import {messaging} from "@/firebase";
import {app} from "@/main";
import {getToken as getFirebaseToken} from "firebase/messaging";
import useAuthStore from "@/store/api/useAuthStore";

export const getImageUrl = (path: string) => {
  return new URL(`./assets/${path}`, import.meta.url).href;
};

export function getToken(): {access: string | null; refresh: string | null} {
  const access = localStorage.getItem("access_token");
  const refresh = localStorage.getItem("refresh_token");

  return {
    access,
    refresh,
  };
}

export function setToken({ access, refresh, phone_number, user_id }: { access: string, refresh: string, phone_number?: string, user_id?: string }): void  {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
  localStorage.setItem("phone_number", phone_number || '');
  localStorage.setItem("user_id", user_id || '');
}

export function toQueryString(
  obj: StringMap,
  includePaginationParamsByDefault: boolean = true
) {
  const parts = [];
  if (includePaginationParamsByDefault) {
    if (!obj.page) obj.page = "1";
    if (!obj.perPage) obj.perPage = DEFAULT_PER_PAGE.toString();
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return parts.length > 0 ? `?${parts.join("&")}` : "";
}

export function generateRandomAnalyticsData(n: number) {
  const randomDateInMonth = (month: number) => {
    const year = new Date().getFullYear();
    const day = Math.floor(Math.random() * 28) + 1; // Ensuring a valid day in month
    return new Date(year, month, day).toISOString().split("T")[0]; // Returning as yyyy-mm-dd
  };

  const randomCount = () => Math.floor(Math.random() * 100); // Random count between 0 and 99

  const generateChartData = () => {
    const month = Math.floor(Math.random() * 12); // Random month
    return Array.from({length: n}, () => ({
      date: randomDateInMonth(month),
      count: randomCount(),
    }));
  };

  return {
    users_chart_data: generateChartData(),
    consumer_products_chart_data: generateChartData(),
    market_products_chart_data: generateChartData(),
    markets_chart_data: generateChartData(),
  };
}

interface DateTimeObject {
  date: () => string;
  time: () => string;
  text: (level: number) => string;
  datetime: () => string;
  offsetBetween: (otherDateTime: DateTimeObject) => DateTimeObject;
}

export function createDateTimeObject(dateTimeString: string): DateTimeObject {
  const dateObject = new Date(dateTimeString);
  const now = new Date();

  return {
    date: () => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return dateObject.toLocaleDateString(undefined, options);
    },
    time: () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      };
      return dateObject.toLocaleTimeString(undefined, options);
    },
    datetime: () => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      };
      return dateObject.toLocaleString(undefined, options);
    },
    offsetBetween: (otherDateTime: DateTimeObject) => {
      const offsetMs =
        dateObject.getTime() - new Date(otherDateTime.datetime()).getTime();
      const offsetDate = new Date(offsetMs);

      return createDateTimeObject(offsetDate.toISOString());
    },
    text(level: number = Infinity): string {
      const diffInMs = now.getTime() - dateObject.getTime();
      const diffInSeconds = Math.floor(diffInMs / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      if (diffInSeconds < 60 && level >= 0) {
        return "just now";
      } else if (diffInMinutes < 60 && level >= 1) {
        return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
      } else if (diffInHours < 24 && level >= 2) {
        return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
      } else if (diffInDays < 31 && level >= 3) {
        return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
      } else {
        // Return full date and time if level is exceeded or not specified
        return this.date();
      }
    },
  };
}

export const useDateFormat = (dateTimeString: string) =>
  createDateTimeObject(dateTimeString);

export const contentTypeToRouteName = (contentType: string) => {
  switch (contentType) {
    case "user":
      return "user";
    case "complaint":
      return "claims";
    case "market":
      return "seller";
  }

  return "home";
};

export function sanitizeObject<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const sanitizedObj = {} as Pick<T, K>;

  keys.forEach((key) => {
    if (key in obj) {
      sanitizedObj[key] = obj[key];
    }
  });

  return sanitizedObj;
}

export function useToast(lf = 3000) {
  if (!app) return;

  return {
    toast(
      {title, body, status}: {title: string; body: string; status: string},
      life: number = lf
    ) {
      app.config.globalProperties.$toast.add({
        severity: status,
        life,
        summary: title,
        detail: body,
      });
    },
    info({title, body}: {title: string; body: string}, life: number = lf) {
      this.toast({title, body, status: "info"}, life);
    },
    error({title, body}: {title: string; body: string}, life: number = lf) {
      this.toast({title, body, status: "error"}, life);
    },
    success(
      {title, body}: {title: string; body: string},
      life: number = lf
    ) {
      this.toast({title, body, status: "success"}, life);
    },
  };
}

type ActionType = "create" | "delete" | "update" | "action";
type ActionStatus =
  | "info"
  | "error"
  | "warn"
  | "secondary"
  | "contrast"
  | "success";

type CustomBodyTextCallback = ({
  status,
  type,
  modelName,
  error,
}: {
  status: ActionStatus;
  type: ActionType;
  modelName?: string;
  error?: string | null;
}) => string;

export function getActionDescription({
  type,
  status,
  modelName,
  error,
  customBodyText,
}: {
  status: ActionStatus;
  type: ActionType;
  modelName?: string;
  error?: string | null;
  customBodyText?: string | CustomBodyTextCallback;
}): {title: string; body: string} {
  const statusMap: Record<ActionStatus, string> = {
    info: "Ma'lumot",
    success: "Muvaffaqiyat",
    error: "Xato",
    warn: "Diqqat",
    secondary: "Ikkinchi darajali",
    contrast: "Kontrast",
  };
  const actionMap: Record<ActionType, string> = {
    create: "yaratil",
    delete: "o'chiril",
    update: "yangilan",
    action: "amalga oshiril",
  };
  const elementName = modelName || "Element";
  const actionVerb = actionMap[type] || actionMap.action;

  let title = statusMap[status] ? statusMap[status] : "No'malum xolat";
  let body = "";

  if (typeof customBodyText === "function") {
    body = customBodyText({status, type, modelName, error});
  } else if (typeof customBodyText === "string") {
    body = customBodyText;
  } else {
    switch (status) {
      case "info":
        body = `${elementName} haqida ma'lumot`;
        break;
      case "error":
        body = `${elementName} ${actionVerb}madi${error ? ` (${error})` : ""}`;
        break;
      case "warn":
        body = `${elementName} uchun ogohlantirish`;
        break;
      case "secondary":
        body = `${elementName} uchun ikkinchi darajali ma'lumot`;
        break;
      case "contrast":
        body = `${elementName} uchun kontrast ma'lumot`;
        break;
      case "success":
        body = `${elementName} muvaffaqiyatli ${actionVerb}di`;
        break;
      default:
        body = `Noma'lum harakat${error ? ` (${error})` : ""}`;
    }
  }

  return {title, body};
}

// src/utils/fcmToken.ts

const VAPID_PUBLIC_KEY =
  "BBOxfajs42NFfWtqTPrCNYYf-ujjGxZLlgCFx-fYNkFvnInnZG24TQqInfnEycfXjq6ajz2_2x41pHXV1tawpbI";

export const getOrGenerateFCMToken = async (): Promise<string | null> => {
  try {
    await getFirebaseToken(messaging, {
      vapidKey: VAPID_PUBLIC_KEY,
    })
      .then(async (token) => {
        await useAuthStore().registerNotificationToken(token);
        return token;
      })
      .catch((err) => {
        console.error("notification is not granted", err);
        return err;
      });

    return null;
  } catch (error) {
    console.error("Error in generating or retrieving FCM token:", error);
    return null;
  }
};

export function arrayMapHelper<
  T extends Record<string, any>,
  K extends keyof T,
  V extends keyof T,
>(arr: T[], keyField: K, valueField: V): Record<T[K], T[V]> {
  return arr.reduce(
    (result, item) => {
      result[item[keyField]] = item[valueField];
      return result;
    },
    {} as Record<T[K], T[V]>
  );
}

/**
 * Groups an array of objects by a specified key.
 */
export function groupByKey(items: any[], key: string | CallableFunction) {
  return items.reduce((acc, item) => {
    let groupKey;

    if (typeof key === "function") {
      // Use the custom function to determine the key
      groupKey = key(item);
    } else if (typeof key === "string") {
      // Use the property value as the key
      groupKey = item[key];
    } else {
      throw new Error("The key must be a string or a function");
    }

    // Initialize the array if it doesn't exist
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    // Push the item into the corresponding key array
    acc[groupKey].push(item);

    return acc;
  }, {});
}

export function toCamelCase(str: string): string {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/[-_]/g, "");
}


export default {formatDate, niceSum, truncateText};
