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
   * @description Search Programs by name in list of current Programs
   *
   * @param {Array} programs
   * @param {String} string
   */
  getProgramsByName: ({ dispatch }, { programs, string }) => {
    return Promise.resolve(programs.filter(
      (item) =>
        item.frontName.toLowerCase().includes(string) || item.description.toLowerCase().includes(string),
    ))
  },
  /**
   * @description Search Programs by Id
   *
   * @param {String} programId
   */
  getProgramById: async ({ dispatch }, programId) => {
    let response
    try {
      response = await apiPrograms.getProgramById({ programId: programId })
    } catch (error) {
      return Promise.reject(error)
    }

    return response.data
  },
}
