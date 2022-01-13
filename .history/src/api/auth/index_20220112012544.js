import dataProvider from '@/api'

/**
 * @description Регистрация, авторизация
 */
export default {
  /**
   * @description Получение профиля
   *
   * @tutorial https://swagger.growfood.pro/?urls.primaryName=PersonalCabinet%201.1#/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C/ClientProfileShow
   *
   * @param payload
   * @return {object}
   */
  getProfile (payload = {}) {
    return dataProvider.get('/clients/profile', { brandId: 1, ...payload })
  }
}
