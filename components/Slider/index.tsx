import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'

import products from '../../datas/product.json'

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

interface IProduct {
  id: string
  name: string
  category: number
  price: number
  detail: string
  image: string
  isFeatured: boolean
}

const Slider = (props) => {
  const [featuredProducts, setFeaturedProducts] = useState([{} as IProduct])

  useEffect(() => {
    let tempArray: Array<IProduct> = []
    products.map((product) => {
      if (product.isFeatured) {
        tempArray.push(product)
      }
    })

    setFeaturedProducts(tempArray)
  }, [])
  return (
    <>
      <Carousel ssr responsive={responsive} className="text-center z-10">
        {featuredProducts.map((product, index) => (
          <Link
            href={{ pathname: '/product/[id]', query: { id: product.id } }}
            key={index}
          >
            <div className="container m-1 cursor-pointer hover:scale-105 transform">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={200}
                />
              )}
              <h2 className="text-lg">{product.name}</h2>
              <p>$ {product.price}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  )
}

export default Slider
