import React from "react";
import Link from "next/link";
import { Item, Button, Loader, Message } from "semantic-ui-react";
import { CartItemType } from "@store/Cart";

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  loading?: boolean;
};

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />;

  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Tu carrito esta vacío</Message.Header>
        <p>
          Deberá agregar algunos artículos al carrito antes de poder realizar el
          pago.
        </p>
      </Message>
    );

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem;

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link href={`/product/${id}/`}>
              <a>{name}</a>
            </Link>
          </Item.Header>
        ),
        image: (
          <Item.Image
            src={image}
            alt={name}
            size="small"
            style={{ background: "#f2f2f2" }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: "Aquí va más información...",
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          />
        ),
      };
    });

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />;
};

export default CartItemList;
