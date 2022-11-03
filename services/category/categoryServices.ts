import { AxiosRequestConfig } from 'axios'
import axios from '../../apis/axios'

const END_POINTS = {
  ADD: '/category',
  GET_ALL: '/category',
  DELETE: '/category',
  UPDATE: '/category',
}

export const addCategoryApi = (data) => {
  return axios.post(END_POINTS.ADD, data)
}

export const getAllCategoriesApi = () => {
  return axios.get(END_POINTS.GET_ALL)
}

export const updateCategoryApi = (data) => {
  return axios.put(END_POINTS.UPDATE, data)
}

export const deleteCategoryApi = (categoryId, config: AxiosRequestConfig) => {
  return axios.delete(`${END_POINTS.DELETE}/${categoryId}`, config)
}
