import Vue from 'vue'
import {
  numberLingFormFunc,
  numberLingFormWithNumberFunc,
  formatMoney,
} from '@/services/numFunctions'

export default {
  install: (app) => {
    Vue.prototype.$formatMoney = (value) => {
      return formatMoney(value)
    }

    Vue.prototype.$numberLingFormFunc = (
      number,
      chelovek,
      cheloveka,
      chelovekov,
    ) => {
      return numberLingFormFunc(number, chelovek, cheloveka, chelovekov)
    }

    Vue.prototype.$numberLingFormWithNumberFunc = (
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
  },
}
