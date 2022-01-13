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
   * @description Search Programs by category
   *
   * @param {Number} categoryId
   */
  getProgramsByCategory: async ({ dispatch }, categoryId) => {
    let response
    try {
      response = await apiPrograms.getProgramsByCategory(categoryId)
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
  /**
   * @description Search Programs by name
   *
   * @param {String} categoryId
   */
  getProgramsByName: async ({ dispatch }, name) => {
    let response
    try {
      response = await apiPrograms.getProgramsByName(name)
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
