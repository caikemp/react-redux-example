import { Reducer } from "redux";
import { ProductsState, ProductsTypes } from "./types";

const INITIAL_STATE: ProductsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ProductsTypes.UPDATE:
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.data.id ? action.payload.data : product
        ),
      };

    case ProductsTypes.ADD:
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    case ProductsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
