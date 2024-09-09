export type ContentType = "category" | "consumer_product" | "user";
export type uuid = string;

export interface ICommonStoreStateBase {
  /**
   * Indicates whether the store is currently loading data.
   */
  loading: boolean;

  /**
   * Stores any error message returned by the store.
   * `null` if there is no error.
   */
  error: string | null;

  /**
   * Optional: A label for the store, useful for identifying or categorizing the store instance.
   */
  storeLabel?: string;

  _lastQuery?: any;
}

export interface IPaginatedResponse {
  /**
   * The total number of items available across all pages.
   */
  count: number;

  /**
   * The current page number being viewed.
   */
  current_page: number;

  /**
   * Object containing the URLs for navigating to the next and previous pages.
   * - `next`: URL to the next page, or `null` if on the last page.
   * - `previous`: URL to the previous page, or `null` if on the first page.
   */
  links: { next: string | null; previous: string | null };

  /**
   * The number of items per page.
   */
  page_size: number;

  /**
   * The total number of pages available.
   */
  total_pages: number;
}

export interface RequestOptions {
  /**
   * Indicates whether to show a loader during the fetch operation.
   */
  loader: boolean;

  /**
   * Controls whether the current query parameters should be merged with the new query parameters.
   *
   * If `mergeQueries` is `true`:
   *   - The existing query parameters are retained and combined with the new ones.
   *   - For example, if the current query is `?page=1` and a new fetch is called with `?sort=-created_at`,
   *     the resulting query would be `?page=1&sort=-created_at`.
   *
   * If `mergeQueries` is `false`:
   *   - The new fetch operation will use only the new query parameters, discarding the existing ones.
   */
  mergeQueries: boolean;

  /**
   * Optional: Determines whether to use cached data for the fetch operation.
   */
  useCache?: boolean;
}

export type ActionRequestOptions = Omit<
  Partial<RequestOptions>,
  "mergeQueries" | "useCache"
>;
