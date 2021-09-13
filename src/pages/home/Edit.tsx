import React from "react";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import { Col, Row } from "../../components/theme";
import { Product } from "../../store/ducks/products/types";

interface Props {
  product: Product;
  onChange(product: Product): void;
  update(): void;
}

const Edit = ({ product, onChange, update }: Props): JSX.Element => {
  return (
    <form className="edit-form">
      <h3>Product: {product.name}</h3>
      <Row>
        <Col className="col-xs-12 ">
          <div>Image</div>
          <Input
            value={product.image}
            onChange={(e) => onChange({ ...product, image: e.target.value })}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <div>Name</div>
          <Input
            value={product.name}
            onChange={(e) => onChange({ ...product, name: e.target.value })}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <div>Information</div>
          <Input
            value={product.info}
            onChange={(e) => onChange({ ...product, info: e.target.value })}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <div>Price</div>
          <Input
            value={product.price}
            onChange={(e) => onChange({ ...product, price: e.target.value })}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <div>Promotion Info</div>
          <Input
            value={product.promotion}
            onChange={(e) =>
              onChange({ ...product, promotion: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <div>Link</div>
          <Input
            value={product.link}
            onChange={(e) =>
              onChange({ ...product, promotion: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-xs-12 ">
          <Button onClick={update}>Close</Button>{" "}
          <Button onClick={update}>Update</Button>
        </Col>
      </Row>
    </form>
  );
};

export default Edit;
