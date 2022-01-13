function formatMoney (number) {
  if (
    !number &&
    number !== 0
  ) {
    return
  }

  return Math.round(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    .replace(/,/g, ' ')
}

function numberLingFormFunc (number, chelovek, cheloveka, chelovekov) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return chelovek
  }

  if (
    (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) &&
    (number % 100 < 10 || number % 100 > 20)
  ) {
    return cheloveka
  }

  return chelovekov
}

function numberLingFormWithNumberFunc (
  number,
  chelovek,
  cheloveka,
  chelovekov,
  useNbsp = false
) {
  return (
    number +
    (useNbsp ? '&nbsp;' : ' ') +
    numberLingFormFunc(number, chelovek, cheloveka, chelovekov)
  )
}

export {
  numberLingFormFunc,
  numberLingFormWithNumberFunc,
  formatMoney
}
