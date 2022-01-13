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
  // getCategoryById: async ({ dispatch }, categoryId) => {
  //   let response
  //   try {
  //     response = await apiCategories.getCategoryById({ categoryId: categoryId })
  //   } catch (error) {
  //     return Promise.reject(error)
  //   }

  //   return response.data
  // }
}
