import { TimeStampMixin, UUIDMixin } from '@/types/api/models' // Adjust path as necessary
import { uuid } from '../..'

export interface Permission {
  id: string
  codename: string
  name: string
  content_type: string
}

export interface User extends TimeStampMixin, UUIDMixin {
  phone_number: string
  username: string
  email?: string
  first_name: string
  last_name: string
  is_active: boolean
  is_staff: boolean
  market_id: null | string
  readonly last_login_attempt?: string | null
  readonly failed_login_attempts?: number
  home_town?: string | null
  readonly user_permissions: Permission[]
  readonly get_user_products_count: number
  profile_image: string | null
}

export interface Coupon extends TimeStampMixin, UUIDMixin {
  id: string
  coupon_code: string
  user?: User | null
  is_used: boolean
  expiry_date: string
}

export interface Image extends TimeStampMixin, UUIDMixin {
  id: string
  alt_text?: string | null
  image: string
}

export interface LocationPoint extends TimeStampMixin, UUIDMixin {
  id: string
  lon?: number | null
  lat?: number | null
  address_label?: string | null
}

export interface Category extends TimeStampMixin, UUIDMixin {
  name: string
  image: string | null
  parent_id: uuid | null
  type: 'consumer' | 'business'
  descendants: Category[]
}
