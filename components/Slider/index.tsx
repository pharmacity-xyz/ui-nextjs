import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'

import featuredProducts from '../../datas/featuredProducts.json'

import 'react-multi-carousel/lib/styles.css'

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

const Slider = (props) => {
  return (
    <Carousel ssr responsive={responsive} className="text-center z-10">
      {featuredProducts.map((product) => (
        <Link href={product.link}>
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
