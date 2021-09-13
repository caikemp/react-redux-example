import { action } from "typesafe-actions";
import { Product, ProductsTypes } from "./types";

export const loadRequest = () => action(ProductsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Product[]) =>
  action(ProductsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);

export const add = () => action(ProductsTypes.ADD);

export const update = (data: Product) => action(ProductsTypes.UPDATE, { data });
