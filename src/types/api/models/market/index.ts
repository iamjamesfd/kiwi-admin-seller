
import {User, LocationPoint, Category, Image} from "../common";
import {TimeStampMixin, UUIDMixin} from "..";

export enum MarketStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING_APPROVAL = "pending_approval",
  SUSPENDED = "suspended",
  BANNED = "banned",
}

export interface Market extends TimeStampMixin, UUIDMixin {
  owner?: User;
  name?: string;
  image: string;
  mchjName: string;
  description?: string;
  subscriber: User[];
  location?: LocationPoint;
  username?: string;
  status: MarketStatus;
  hasDelivery: boolean;
  deliveryPrice: number;
  get_image_url: string | null;
  location_field_indexing: {lat: number; lon: number} | null;
  get_market_products_count: number;
  get_total_product_price: number;
}

export enum MarketProductStatus {
  ACTIVE = "active",
  ARCHIVED = "archived",
  OUT_OF_STOCK = "out_of_stock",
}

export interface MarketProduct extends TimeStampMixin, UUIDMixin {
  name?: string;
  market?: Market;
  thumbnailImage?: string;
  category: Category[];
  images: Image[];
  price: number;
  discountPrice: number;
  description: string;
  isNegotiable: boolean;
  numberOfOrder?: number;
  status: MarketProductStatus;
  productNumberForSale: number;
  likes: User[];
  views: number;
  viewers: User[];
  isActive: boolean;
  get_image_url: string | null;
  get_total_sum_of_product: number;
  is_discounted: boolean;
  discount_percentage: number;
  market_location_indexing: {lat: number; lon: number} | null;
}
