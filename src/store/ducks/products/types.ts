/**
 * Action types
 */
export enum ProductsTypes {
  LOAD_REQUEST = "@products/LOAD_REQUEST",
  LOAD_SUCCESS = "@products/LOAD_SUCCESS",
  LOAD_FAILURE = "@products/LOAD_FAILURE",
  UPDATE = "@products/UPDATE",
  ADD = "@products/ADD",
}
export interface Product {
  id: number;
  name: string;
  info: string;
  price: string;
  promotion: string;
  image: string;
  link: string;
}

/**
 * State type
 */
export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}
