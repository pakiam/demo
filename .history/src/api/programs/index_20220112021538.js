// import dataProvider from '@/api'
import { resolve } from 'core-js/fn/promise'
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
    console.log('1', programs)
    return new Promise(function (resolve, reject) {
      resolve(programs)
    })
    // return programs
    // Promise.resolve(programs)
  }
}
