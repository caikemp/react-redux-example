import React from "react";
import { Product } from "../../store/ducks/products/types";
import Button from "../form/Button";
import CircleButton from "../form/CircleButton";
import Input from "../form/Input";

export interface CartItem {
  beer: Product;
  quantity: number;
}

interface OwnProps {
  beer: Product;
  add(item: CartItem): void;
}
const BeerCardAction = ({ beer, add }: OwnProps): JSX.Element => {
  const [quantity, setQuantity] = React.useState<number>(0);
  return (
    <form>
      <CircleButton
        onClick={() => {
          setQuantity((q: number) => q - 1);
        }}
        disabled={!quantity}
      >
        -
      </CircleButton>
      <Input
        className="beer-input-quantity"
        readOnly
        value={String(quantity)}
      />
      <CircleButton
        onClick={() => {
          setQuantity((q: number) => q + 1);
        }}
      >
        +
      </CircleButton>
      <Button onClick={() => add({ beer, quantity })} disabled={!quantity}>
        ADD
      </Button>
    </form>
  );
};

export default BeerCardAction;
