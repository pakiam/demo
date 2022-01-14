import axios from 'axios'
import cookies from '@/services/cookies'

function baseURL (API_ROOT) {
  const API_VERSION = '2_0'
  return `${API_ROOT}/api/personal-cabinet/v${API_VERSION}`
}

function setApiRootFromParams () {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('preprod')) {
    switch (urlParams.get('preprod')) {
      case 'rteam': {
        cookies.set('API_ROOT', 'https://review-rteam-admin-review.growfood.pro')
        break
      }
      case 'gteam': {
        cookies.set('API_ROOT', 'https://review-g-team-admin-review.growfood.pro')
        break
      }
      case 'fteam': {
        cookies.set('API_ROOT', 'https://review-f-team-admin-review.growfood.pro')
        break
      }
      case 'mobile': {
        cookies.set('API_ROOT', 'https://review-mobile-admin-review.growfood.pro')
        break
      }
      case 'core': {
        cookies.set('API_ROOT', 'https://review-core-admin-review.growfood.pro')
        break
      }
      default: {
        cookies.set('API_ROOT', 'https://review-develop-admin-review.growfood.pro')
        break
      }
    }
  }
  // if (urlParams.has('revstor')) {
  //   setCookie("STORAGE_URL", "https://storage-review.growfood.pro/storage1/data")
  // }
  if (urlParams.has('local')) {
    cookies.set('API_ROOT', 'https://admin.growfood.local')
  }
  if (urlParams.has('prod')) {
    cookies.set('API_ROOT', 'https://admin.growfood.pro')
  }
}

function initApiRoot () {
  let API_ROOT = process.env.VUE_APP_API_ROOT
  setApiRootFromParams()
  if (cookies.get('API_ROOT')) {
    API_ROOT = cookies.get('API_ROOT')
  }
  return API_ROOT
}

export { baseURL, initApiRoot }

export default axios.create({
  baseURL: baseURL(initApiRoot()),
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': authorization
    // 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Client-Token',
  },
})
