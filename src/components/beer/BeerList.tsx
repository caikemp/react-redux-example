import React from "react";
import { Product } from "../../store/ducks/products/types";
import { Col, Row } from "../theme";
import BeerCard from "./BeerCard";

interface Props {
  products: Product[];
  edit(product: Product): void;
}

const BeerList = ({ products, edit }: Props): JSX.Element => {
  return (
    <Row>
      {products.map((product) => (
        <Col className="col-xs-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
          <BeerCard product={product} edit={edit} />
        </Col>
      ))}
    </Row>
  );
};

export default BeerList;
