import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { IProduct } from '../../types/productType'
import Layout from '../../components/Layout'
import ProductOverview from '../../components/ProductOverview'
import { useRouter } from 'next/router'
import { getProductByIdApi } from '../../services/product/productServices'
import { IReturnProducts } from '../../services/product/types'

type Props = {
  product: IProduct
}

const ProductDetail: React.FC<Props> = () => {
  const [product, setProduct] = useState<IReturnProducts>({} as IReturnProducts)
  const router = useRouter()

  const fetchProduct = async (productId: string) => {
    try {
      const res = await getProductByIdApi(productId)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { id } = router.query
    console.log(id)
    fetchProduct(id as string)
  }, [])

  return (
    <Layout title="Product Detail">
      <ProductOverview product={product} />
      <div className="my-20">
        <div className="text-center my-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Product Detail
          </h1>
        </div>
        <div className="flex flex-col p-4">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full">
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
                  <tbody className="text-center">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
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
    </Layout>
  )
}

export default ProductDetail
