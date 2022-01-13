import {
  numberLingFormFunc,
  numberLingFormWithNumberFunc,
  formatMoney,
} from '@/services/numFunctions'

export default {
  install: (app) => {
    app.config.globalProperties.$formatMoney = value => {
      return formatMoney(value)
    }
    app.provide('formatMoney', formatMoney)

    app.config.globalProperties.$numberLingFormFunc = (number, chelovek, cheloveka, chelovekov) => {
      return numberLingFormFunc(number, chelovek, cheloveka, chelovekov)
    }
    app.provide('numberLingFormFunc', numberLingFormFunc)

    app.config.globalProperties.$numberLingFormWithNumberFunc = (
      number,
      chelovek,
      cheloveka,
      chelovekov,
      useNbsp,
    ) => {
      return numberLingFormWithNumberFunc(
        number,
        chelovek,
        cheloveka,
        chelovekov,
        useNbsp,
      )
    }
    app.provide('numberLingFormWithNumberFunc', numberLingFormWithNumberFunc)
  },
}
