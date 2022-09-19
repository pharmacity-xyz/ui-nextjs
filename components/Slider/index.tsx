import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

import product1 from "../../public/images/product_01.png";
import product2 from "../../public/images/product_02.png";
import product3 from "../../public/images/product_03.png";

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

const Slider = (props) => {
  return (
    <Carousel ssr responsive={responsive} className="text-center">
      <div className="container bg-white m-1">
        <Image src={product1} width={200} height={300} />
        <h2>Umcka Cold Care</h2>
        <p>$120.00</p>
      </div>
      <div className="container">
        <Image src={product2} width={200} height={300} />
        <h2>Umcka Cold Care</h2>
        <p>$120.00</p>
      </div>
      <div className="container">
        <Image src={product3} width={200} height={300} />
        <h2>Umcka Cold Care</h2>
        <p>$120.00</p>
      </div>
      <div className="container">
        <Image src={product1} width={200} height={300} />
        <h2>Umcka Cold Care</h2>
        <p>$120.00</p>
      </div>
    </Carousel>
  );
};

export default Slider;
