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
    console.log('1', programs)
    return programs
  }
}
