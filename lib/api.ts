import products from '../datas/product.json'

export const getAllProducts = async () => {
  return products
}

export const getProductById = async (id: number) => {
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
