import featuredProducts from '../datas/featuredProducts.json'

export const getAllProducts = () => {
  
}

export const getProductById = (id: number) => {
  let data = {}
  let retProduct = {}
  featuredProducts.map((product) => {
    if (id === product.id) {
      console.log('product found', product)
      retProduct = product
    }
  })

  return data
}
