// import dataProvider from '@/api'
import { programs } from '../mockups/programs'

/**
 * @description Моки
 */
export default {
  /**
   * @description Получение Программ
   *
   * @param payload
   * @return {object}
   */
  getPrograms (payload = {}) {
    // return dataProvider.get('/programs', { ...payload })
    return new Promise(function (resolve, reject) {
      resolve({ data: programs, success: true })
    })
    // return programs
    // Promise.resolve(programs)
  },
  getProgramsByCategory (categoryId = -1) {
    console.log('getProgramsByCategory', categoryId)
    return new Promise(function (resolve, reject) {
      if (categoryId === -1) {
        resolve(programs)
      } else {
        const filteredPrograms = programs.filter((item) =>
          item.categoryId.includes(categoryId),
        )

        resolve({ data: filteredPrograms, success: true })
      }
    })
  },
  getProgramsByName (string) {
    return new Promise(function (resolve, reject) {
      const filteredPrograms = programs.filter(
        (item) =>
          item.frontName.includes(string) || item.description.includes(string),
      )
      resolve({ data: filteredPrograms, success: true })
    })
  },
}
