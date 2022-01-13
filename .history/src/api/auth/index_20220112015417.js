// import dataProvider from '@/api'
import { categories } from '../mockups/categories'
import { programs } from '../mockups/programs'

/**
 * @description Моки
 */
export default {
  /**
   * @description Получение Категорий
   *
   * @param payload
   * @return {object}
   */
  getCategories (payload = {}) {
    // return dataProvider.get('/categories', { ...payload })
    return categories
  },
  getPrograms (payload = {}) {
    // return dataProvider.get('/programs', { ...payload })
    return programs
  }
}
