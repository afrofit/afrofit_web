export type StripeSessionDataType = {
  id: string;
  totalAmount: number;
  currency: string;
  expiresAt: number;
  paymentStatus: string;
  status: string;
  subscriptionId: string;
  customerDetails: CustomerDetailsType;
};

export type CustomerDetailsType = {
  customerId: string;
  email: string;
  address?: CustomerAddressType;
  name: string;
  phone?: any;
};

export type CustomerAddressType = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
};
