export enum FieldNames {
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  customer_country_id = 'customer_country_id',
  phone_prefix_id = 'phone_prefix_id',
  phone = 'phone',
}

export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  customer_country_id: string;
  phone_prefix_id: string;
  phone: string;
}
