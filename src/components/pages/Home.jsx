import React from "react";
import Hero from "../home/hero/Hero";
import Card from "../home/hero/Card";
import Products from "../home/products/Products";
import Banner from "../home/banner/Banner";
import TopProducts from "../home/top/TopProducts";
import Price from "../home/price/Price";
import Testimonial from "../home/testimonial/Testimonial";
import Blog from "../home/blog/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Card />
      <Products />
      <Banner />
      {/* <TopProducts /> */}
      <Price />
      <Testimonial />
      <Blog />
    </>
  );
}
