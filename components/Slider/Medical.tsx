import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'

import medical from '../../datas/medical.json'

import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
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

const Medical = (props) => {
  const [featuredProducts, setFeaturedProducts] = useState([{} as IProduct])

  useEffect(() => {
    // let tempArray: Array<IProduct> = []
    // medical.map((product) => {
    //   if (product.isFeatured) {
    //     tempArray.push(product)
    //   }
    // })
    // setFeaturedProducts(tempArray)
  }, [])
  return (
    <>
      <Carousel
        autoPlay
        infinite
        arrows={false}
        ssr
        responsive={responsive}
        className="text-center z-10"
      >
        {medical.map((product, index) => (
          // <Link
          //   href={{ pathname: '/product/[id]', query: { id: product.id } }}
          //   key={index}
          // >
          <div
            className="w-full"
            key={index}
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width="1000px"
                height="550px"
              />
            )}
            {/* <h2 className="text-lg">{product.name}</h2>  */}
            {/* <p>$ {product.price}</p> */}
          </div>
          // </Link>
        ))}
      </Carousel>
    </>
  )
}

export default Medical
