import React, { useState } from "react";
import Heading from "../../common/Heading";
import { topProducts } from "../../../utils/data";
import ProductItem from "../products/ProductItem";

export default function TopProducts() {
  const [cartItems, setCartItems] = useState(topProducts);
  const allCategories = [
    "all",
    ...new Set(cartItems.map((item) => item.category)),
  ];

  const [category, setCategory] = useState(allCategories);

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);
    setCartItems(newItem);

    if (category === "all") {
      setCartItems(topProducts);
      return;
    }
  };

  return (
    <section className="topProduct">
      <div className="container">
        <div className="head">
          <Heading
            title="Top Selling Products"
            desc="Meet our newbies! The latest templates uploaded to the marketplace."
          />
          <div className="category">
            {category.map((category, id) => (
              <button
                key={id}
                className="button"
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <ProductItem cartItems={cartItems} />
      </div>
    </section>
  );
}
