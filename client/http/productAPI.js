import { host, authHost } from './index'

export const createCategory = async (category) => {
  const { data } = await authHost.post('api/category', category)
  return data
}

export const getCategory = async () => {
  const { data } = await host.get('api/category')
  return data
}

export const createBrand = async (brand) => {
  const { data } = await authHost.post('api/brand', brand)
  return data
}

export const getBrands = async () => {
  const { data } = await host.get('api/brand')
  return data
}

export const createProduct = async (product) => {
  const { data } = await authHost.post('api/product', product)
  return data
}

export const getAllProducts = async () => {
  const { data } = await host.get('api/product')
  return data
}

export const getProducts = async (categoryId, brandId, page, limit) => {
  const { data } = await host.get('api/product', {
    params: {
      categoryId,
      brandId,
      page, 
      limit
    }
  })
  return data
}

export const getOneProduct = async (id) => {
  const { data } = await host.get(`api/product/${id}`)
  return data
}
