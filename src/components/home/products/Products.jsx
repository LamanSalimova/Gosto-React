import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "./ProductItem";
import { products } from "../../../utils/data";

export default function Products() {
  const [cartItems, setCartItems] = useState(products);
  return (
    <section className="product">
      <div className="container">
        <Heading
          title="Trendings Products"
          desc="Check the hottest designs of the week. These rising stars are worth your attention."
        />

        <ProductItem cartItems={cartItems} />
      </div>
    </section>
  );
}
