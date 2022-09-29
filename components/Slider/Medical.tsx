import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'

import medical from '../../datas/medical.json'

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

const Medical = (props) => {
  return (
    <>
      <Carousel
        swipeable={false}
        autoPlay
        infinite
        arrows={false}
        ssr
        responsive={responsive}
        className="text-center z-10"
      >
        {medical.map((product, index) => (
          <div className="w-full" key={index}>
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={50}
                layout="responsive"
              />
            )}
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Medical
