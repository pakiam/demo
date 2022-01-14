import Cookies from 'js-cookie'

const domain = location.hostname.includes('localhost')
  ? ''
  : `${
      location.hostname
        .replace('.pro', '')
        .split('.')
        .reverse()[0]
    }.pro`

export default {
  set (name, value, options) {
    const ops = { ...options, domain: domain }
    Cookies.set(name, value, ops)
  },

  remove (name) {
    if (name === 'client_token') Cookies.set(name, null, { expires: -1 })
    Cookies.set(name, null, { domain: domain, expires: -1 })
  },

  get (name) {
    if (!name) {
      // fix splitting urls inside cookies values
      var a = Object.fromEntries(
        document.cookie.split('; ').map(x => {
          var val = x.split('=')
          return [val.shift(), val.join('=')]
        }),
      )
      return a
    }
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) {
        return c
          .substring(nameEQ.length, c.length)
          .replace(/%22/g, '"')
          .replace(/%2C/g, ',')
      }
    }
    return null
  },

  getNoDomain (name) {
    Cookies.get(name)
  },
}
