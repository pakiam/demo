import apiPrograms from '@/api/programs'

export default {
  /**
   * @description Get Programs
   *
   * @param {Number} categoryId
   */
  getPrograms: async ({ dispatch }, data = {}) => {
    let response
    try {
      response = await apiPrograms.getPrograms(data)
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
  /**
   * @description Get Programs by category
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
  getProgramsByName: ({ dispatch }, { programs, string }) =>
    new Promise((resolve) => {
      return programs.filter(
        (item) =>
          item.frontName.includes(string) || item.description.includes(string),
      )
      // resolve()
    }),
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
