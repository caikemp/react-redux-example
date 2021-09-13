import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerList from "../../components/beer/BeerList";
import { Col, Row } from "../../components/theme";
import productsMock from "../../mocks/products.json";
import * as ProductActionsCreators from "../../store/ducks/products/actions";
import { Product } from "../../store/ducks/products/types";
import { RootState } from "../../store/ducks/rootReducer";
import Edit from "./Edit";

const Home = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [editProduct, setProduct] = React.useState<Product>();

  React.useEffect(() => {
    dispatch(ProductActionsCreators.loadSuccess(productsMock));
  }, [dispatch]);

  const sortBy = (type: keyof Product) => {
    dispatch(
      ProductActionsCreators.loadSuccess(
        products.data.sort((a, b) =>
          a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
        )
      )
    );
  };

  const onChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    sortBy(e.target.value as keyof Product);
  };

  const updateProduct = () => {
    editProduct && dispatch(ProductActionsCreators.update(editProduct));
    setProduct(undefined);
  };

  return (
    <>
      <Row className="sort">
        <Col className="col-xs-12 col-md-2">
          <label>Order by</label>
          <select onChange={onChangeOrder}>
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </Col>
      </Row>
      <Row>
        <BeerList products={products.data} edit={setProduct} />
      </Row>

      {editProduct && (
        <Row>
          <Col className="col-xs-12 col-md-6 ">
            <Edit
              product={editProduct}
              onChange={setProduct}
              update={updateProduct}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Home;
