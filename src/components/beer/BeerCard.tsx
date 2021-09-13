import React from "react";
import { Product } from "../../store/ducks/products/types";
import CircleButton from "../form/CircleButton";
import BeerCardAction, { CartItem } from "./BeerCardAction";

interface OwnProps {
  product: Product;
  edit(product: Product): void;
}

const BeerCard = ({ product, edit }: OwnProps): JSX.Element => {
  return (
    <div className="beer-card">
      <div className="text-left">
        <CircleButton onClick={() => edit(product)}>
          <i className="fas fa-pen" />
        </CircleButton>
      </div>
      <div className="beer-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="beer-card-text">
        <h2>{product.name}</h2>
        <p className="text-muted beer-card-subtitle">{product.info}</p>
        <p className="beer-card-price">{product.price}</p>
        <p className="beer-card-promotion">{product.promotion}</p>
        <a href={product.link} className="beer-card-details">
          View details
        </a>
      </div>

      <div className="beer-card-action">
        <BeerCardAction
          beer={product}
          add={(item: CartItem) => console.log(item)}
        />
      </div>
    </div>
  );
};

export default BeerCard;
