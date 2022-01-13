import apiPrograms from '@/api/programs'

export default {
  getPrograms: async ({ dispatch }) => {
    let response
    try {
      response = await apiPrograms.getPrograms()
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
  /**
   * @description Search Programs by parameters
   *
   * @param {Object} data
   * @param {String} data.name
   * @param {Number} data.category
   */
  searchPrograms: async ({ dispatch }, data) => {},
  getProgramsByCategory: async ({ dispatch }, categoryId) => {
    let response
    try {
      response = await apiPrograms.getProgramsByCategory(categoryId)
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
  getProgramsByName: async ({ dispatch }, categoryId) => {
    let response
    try {
      response = await apiPrograms.getProgramsByName(categoryId)
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
  // getProgramById: async ({ dispatch }, programId) => {
  //   let response
  //   try {
  //     response = await apiPrograms.getProgramById({ programId: programId })
  //   } catch (error) {
  //     return Promise.reject(error)
  //   }

  //   return response.data
  // }
}
