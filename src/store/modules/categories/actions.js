import apiCategories from '@/api/categories'

export default {
  getCategories: async ({ dispatch }) => {
    let response
    try {
      response = await apiCategories.getCategories()
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
}
