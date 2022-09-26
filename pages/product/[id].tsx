import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'

import { getProductById } from '../../lib/api'
import { IProduct } from '../../types/productType'

type Props = {
  product: IProduct
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const [counter, setCounter] = useState(1)

  return (
    <>
      <div className="grid grid-cols-2 mt-20">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width="500"
            height="500"
          />
        )}
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
        <div className="text-center my-4">
          <h1 className="text-2xl">Product Detail</h1>
        </div>
        <div className="flex flex-col p-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-slate-700 text-center">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Product Id
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  let data: IProduct

  if (typeof id === 'string') {
    data = await getProductById(id)
  } else {
    data = {} as IProduct
  }

  return {
    props: {
      product: data,
    },
  }
}

export default ProductDetail
