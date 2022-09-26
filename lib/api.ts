import products from '../datas/product.json'
import { IProduct } from '../types/productType'

export const getAllProducts = async () => {
  return products
}

export const getProductById = async (id: string): Promise<IProduct> => {
  let allProducts = await getAllProducts()
  let retProduct
  allProducts.map((product) => {
    if (id === product.id) {
      console.log('product found', product)
      retProduct = product
    }
  })

  return retProduct
}
