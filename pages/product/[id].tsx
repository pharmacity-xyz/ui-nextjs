import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { getProductById } from '../../lib/api'
import product1Img from '../../public/images/product_01.png'
import { IProduct } from '../../types/productType'

type Props = {
  product: IProduct
}

const ProductDetail: React.FC<Props> = ({ product }: Props) => {
  // const [product, setProduct] = useState({} as IProduct)
  const [counter, setCounter] = useState(1)
  const router = useRouter()
  const { id } = router.query

  useState(() => {
    // featuredProducts.map((product) => {
    //   if (id === product.id) {
    //   }
    // })
    // setProduct({
    //   id: 'ghhgurghrg',
    //   name: 'Ibuprofen Tablets',
    //   category: 1,
    //   detail:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.',
    //   price: 120.0,
    //   image: '',
    // })
  })

  return (
    <>
      <div className="grid grid-cols-2 mt-20">
        <Image src={product1Img} width="500" height="500" />
        <div>
          <h1 className="text-4xl">{product.name}</h1>
          <p className="text-[#8c92a0] mt-4">{product.detail}</p>
          <h2 className="text-[#75b239] text-2xl mt-4 font-bold">
            $ {product.price}
          </h2>
          <div>
            <button
              onClick={() => setCounter(counter - 1)}
              className="text-[#75b239] border border-[#75b239] p-2 rounded-l-md text-xl"
            >
              -
            </button>
            <input
              type="number"
              readOnly
              value={counter}
              className="text-center border border-gray pt-3 pb-2 mt-8"
            />
            <button
              onClick={() => setCounter(counter + 1)}
              className="text-[#75b239] border border-[#75b239] p-2 rounded-r-md text-xl"
            >
              +
            </button>
          </div>
          <button className="text-white bg-[#75b239] px-6 py-5 rounded-md mt-10">
            ADD TO CART
          </button>
        </div>
      </div>
      <div>
        <h1>Product Information</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Brand</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const id = params?.id
  let data
  if (typeof id === 'string') {
    data = getProductById(parseInt(id))
  }
  // const data = getProductById(id as number)

  return {
    props: {
      preview,
      product: data.product,
    },
  }
}

export const getStaticPaths = (id) => {
  return {
    paths: [{ params: { id: `product/${id}` } }],
    fallback: false,
  }
}
