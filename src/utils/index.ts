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
  const month: string = date.toLocaleString("default", { month: "long" });
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

export default { formatDate, niceSum, truncateText };
