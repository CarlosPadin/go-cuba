
export type SubscriptionPlan = '1M' | '3M' | '6M' | '1Y';

export interface IOwner {
  address: string,
  ci: string,
  email: string,
  id: string,
  last_name: string,
  name: string,
  phone: string,
  profile_image: string,
  rating: number,
  is_car_owner: boolean,
  active?: boolean,
  subscription?: SubscriptionPlan | null,
  last_payment_date?: string | null,
  subscription_expires_at?: string | null,
}