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
      resolve(programs)
    })
    // return programs
    // Promise.resolve(programs)
  },
  getProgramsByCategory (categoryId = -1) {
    return new Promise(function (resolve, reject) {
      if (categoryId === -1) {
        resolve(programs)
      } else {
        const filteredPrograms = programs.find(item => item.categoryId.includes(categoryId))
        resolve(filteredPrograms)
      }
    })
  },
  getProgramsByName (string) {
    return new Promise(function (resolve, reject) {
      const filteredPrograms = programs.find(item => (item.frontName.includes(string) || item.description.includes(string)))
      resolve(filteredPrograms)
    })
  },
}
