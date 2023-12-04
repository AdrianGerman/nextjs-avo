import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <div>Hola muy buenas desde el fin del mundo y antes de ameri!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
