import type {ContentType, uuid} from "..";

export interface UUIDMixin {
  readonly id: uuid;
}

export interface TimeStampMixin {
  created_at: string;
  updated_at: string;
}

export interface Advertising extends UUIDMixin, TimeStampMixin {
  title: string;
  description: string;
  image_ad: string; // URL or path to the image
  url: string;
  status: "active" | "inactive" | "scheduled";
  start_date: string;
  end_date: string;
  priority: number;
  clicks: number;
  impressions: number;
  ctr: number;
}


/**
 * Types of Notifications
 *
 * - **NM**: New Message
 * - **NP**: New Product
 * - **GL**: Global Notification
 * - **NS**: New Subscriber
 * - **NMD**: New Model
 * - **NC**: New Complaint
 * - **MU**: Model Update
 * - **MD**: Model Delete
 * - **MC**: Model Create
 */

export type NotificationTypes =
  | "NM"   // New Message
  | "GL"   // Global Notification
  | "NS"   // New Subscriber
  | "MU"   // Model Update
  | "MD"   // Model Delete
  | "MC";  // Model Create

export interface Notification extends UUIDMixin, TimeStampMixin {
  content_type: ContentType;
  content_object: string;
  object_id: uuid;
  topics: string | null;
  tokens: uuid[]
  title: string;
  notification_type: NotificationTypes;
  body: string;
  image: string;
  has_read: boolean
}
