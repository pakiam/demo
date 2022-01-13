// import dataProvider from '@/api'
import { programs } from '../mockups/programs'

/**
 * @description Моки
 */
export default {
  /**
   * @description Получение Программ
   *
   * @param {Object} payload
   * @param {Number} payload.category
   * @return {object}
   */
  getPrograms (payload = {}) {
    // return dataProvider.get('/programs', { ...payload })
    const hasParameters = Object.keys(payload).length
    if (hasParameters) {
      return new Promise(function (resolve, reject) {
        if (payload.category) {
          const category = payload.category

          if (category === -1) {
            resolve({ data: programs, success: true })
          } else {
            const filteredPrograms = programs.filter((item) =>
              item.categoryId.includes(category),
            )

            resolve({ data: filteredPrograms, success: true })
          }
        }
      })
    } else {
      return new Promise(function (resolve, reject) {
        resolve({ data: programs, success: true })
      })
    }
    // return programs
    // Promise.resolve(programs)
  },
  getProgramsByName (string) {
    return new Promise(function (resolve, reject) {
      const filteredPrograms = programs.filter(
        (item) =>
          item.frontName.includes(string) || item.description.includes(string),
      )
      setTimeout(() => {
        resolve({ data: filteredPrograms, success: true })
      }, 5000)
    })
  },
}
