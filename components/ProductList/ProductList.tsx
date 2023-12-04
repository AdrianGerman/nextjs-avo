import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";

interface ProductCardProps {
  id?: string;
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  id,
  price,
  image,
}) => (
  <Card
    header={name}
    image={image}
    meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
  />
);

interface ProductListProps {
  products: ProductCardProps[];
}

const mapProductsToCards = (products: ProductCardProps[]) =>
  products.map(({ id, ...product }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <ProductCard {...product} />
    </Link>
  ));

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <div className="ui centered cards">{mapProductsToCards(products)}</div>
);

export default ProductList;
