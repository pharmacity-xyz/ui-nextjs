import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

import product1 from "../../public/images/product_01.png";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const products = [
  {
    image: product1,
    name: "Umcka Cold Care",
    price: 120.0,
  },
  {
    image: product1,
    name: "Umcka Cold Care",
    price: 120.0,
  },
  {
    image: product1,
    name: "Umcka Cold Care",
    price: 120.0,
  },
  {
    image: product1,
    name: "Umcka Cold Care",
    price: 120.0,
  },
  {
    image: product1,
    name: "Umcka Cold Care",
    price: 120.0,
  },
];

export const SwiperSlide = (props) => {
  return (
    <Carousel ssr responsive={responsive}>
      <div className="container border">
        <Image src={product1} width={100} height={100} />
      </div>
      <div>Item 1</div>
      <div>Item 1</div>
      <div>Item 1</div>
      <div>Item 1</div>
    </Carousel>
  );
};
