// import dataProvider from '@/api'
import { categories } from '../mockups/categories'

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
    return new Promise(function (resolve, reject) {
      resolve(categories)
    })
  },
}
