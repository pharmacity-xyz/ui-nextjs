import axios from '../../apis/axios'

const END_POINTS = {
  ADD: '/product',
  GET_ALL: '/product',
  GET_BY_ID: '/product',
  GET_BY_CATEGORYID: '/product/category',
  SEARCH: '/product/search',
  FEATURED: '/product/featured',
  UPDATE: '/product',
  DELETE: '/product',
}

export const AddProductApi = (data) => {
  return axios.post(END_POINTS.ADD, data)
}

export const GetAllProductsApi = () => {
  return axios.get(END_POINTS.GET_ALL)
}

export const GetProductByIdApi = (productId: string) => {
  return axios.get(`${END_POINTS.GET_BY_ID}/${productId}`)
}

export const GetProductsByCategoryApi = (categoryId: string) => {
  return axios.get(`${END_POINTS.GET_BY_CATEGORYID}/${categoryId}`)
}

export const UpdateProductApi = (data) => {
  return axios.put(END_POINTS.UPDATE, data)
}

export const DeleteProductApi = (id) => {
  return axios.delete(`${END_POINTS.DELETE}/${id}`)
}
