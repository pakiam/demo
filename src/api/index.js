import httpClient, { baseURL } from '../services/httpClient'
import store from '@/store'
import cookies from '@/services/cookies'

export default {
  httpClient,

  setToken (token) {
    this.httpClient.defaults.headers.common['X-Client-Token'] = `${token}`
  },

  removeToken () {
    delete this.httpClient.defaults.headers.common['X-Client-Token']
  },

  setBaseUrl (API_ROOT) {
    cookies.set('API_ROOT', API_ROOT)
    this.httpClient.defaults.baseURL = baseURL(API_ROOT)
  },

  /**
   * Обработка request ошибок
   */
  async errorHandler (data = {}) {
    const {
      error: { response: { status = null } = {} } = {},
      method = null,
      url = null,
      payload = null,
      reSend = false,
    } = data

    switch (status) {
      case 401: {
        store.dispatch('client/logout', {
          withoutLogoutRequest: true,
        })

        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(data?.error)
      }
      case 429: {
        if (reSend) {
          return await this.httpClient[method](url, payload, false)
        }

        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(data?.error)
      }
      default: {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(data?.error)
      }
    }
  },

  async get (url, payload, reSend = true) {
    try {
      return await this.httpClient.get(url, {
        params: payload,
      })
    } catch (error) {
      return await this.errorHandler({
        method: 'get',
        error,
        url,
        payload,
        reSend,
      })
    }
  },

  async post (url, payload, reSend = true) {
    try {
      return await this.httpClient.post(url, payload)
    } catch (error) {
      return await this.errorHandler({
        method: 'post',
        error,
        url,
        payload,
        reSend,
      })
    }
  },

  async put (url, payload, reSend = true) {
    try {
      return await this.httpClient.put(url, payload)
    } catch (error) {
      return await this.errorHandler({
        method: 'put',
        error,
        url,
        payload,
        reSend,
      })
    }
  },

  async patch (url, payload, reSend = true) {
    try {
      return await this.httpClient.patch(url, payload)
    } catch (error) {
      return await this.errorHandler({
        method: 'patch',
        error,
        url,
        payload,
        reSend,
      })
    }
  },
}
