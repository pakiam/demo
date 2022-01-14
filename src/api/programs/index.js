// import dataProvider from '@/api'
import { programs } from '../mockups/programs'

/**
 * @description Моки
 */
export default {
  /**
   * @description Get Programs
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
          const category = Number(payload.category)

          if (category === -1) {
            setTimeout(() => {
              resolve({ data: programs, success: true })
            }, 1000)
          } else {
            const filteredPrograms = programs.filter((item) =>
              item.categoryId.includes(category),
            )
            setTimeout(() => {
              resolve({ data: filteredPrograms, success: true })
            }, 1000)
          }
        }
      })
    } else {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve({ data: programs, success: true })
        }, 1000)
      })
    }
  },
  /**
   * @description Get Programs by Id
   *
   * @param {Object} payload
   * @param {Number} payload.programId
   * @return {object}
   */
  getProgramById (payload = {}) {
    // return dataProvider.get('/programs/:id', { ...payload })
    return new Promise(function (resolve, reject) {
      console.log(123)
      if (payload.programId) {
        const programId = Number(payload.programId)
        const filteredPrograms = programs.find(
          (item) => item.id === programId,
        )
        setTimeout(() => {
          resolve({ data: filteredPrograms, success: true })
        }, 2000)
      } else {
        reject(new Error({ message: 'Spicify Program Id', success: false }))
      }
    })
  },
}
