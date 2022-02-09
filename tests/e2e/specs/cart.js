describe('Programs page test', () => {
  it('Тест добавления программ в корзину', () => {
    cy.visit('http://localhost:8080/shop/programs')
    cy.wait(4000)
    cy.contains('[data-test=cart-text]', 'Корзина пуста')
    cy.get('[data-test=program-item-to-cart]').first().click()
    cy.contains('[data-test=cart-text]', '1 программа')

    cy.get('[data-test=cart-text]').first().click()
    cy.visit('http://localhost:8080/cart')

    cy.get('[data-test=button-clear-cart]').first().click()
    cy.contains('div', 'Cart is empty. Go to')
  })
})
