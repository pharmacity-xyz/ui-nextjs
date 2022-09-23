import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'

import product1 from '../../public/images/product_01.png'
import product2 from '../../public/images/product_02.png'
import product3 from '../../public/images/product_03.png'

import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'

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
}

const products = [
  {
    image: product1,
    name: 'Umcka Cold Care',
    price: 120.0,
  },
  {
    image: product2,
    name: 'Umcka Cold Care',
    price: 100.0,
  },
  {
    image: product3,
    name: 'Umcka Cold Care',
    price: 200.0,
  },
  {
    image: product1,
    name: 'Umcka Cold Care',
    price: 250.0,
  },
  {
    image: product1,
    name: 'Umcka Cold Care',
    price: 120.0,
  },
]

const Slider = (props) => {
  return (
    <Carousel ssr responsive={responsive} className="text-center z-10">
      {products.map((product) => (
        <Link href={'/product/1'}>
          <div className="container m-1 cursor-pointer hover:scale-105 transform">
            <Image src={product.image} width={100} height={200} />
            <h2 className="text-lg">{product.name}</h2>
            <p>$ {product.price}</p>
          </div>
        </Link>
      ))}
    </Carousel>
  )
}

export default Slider
