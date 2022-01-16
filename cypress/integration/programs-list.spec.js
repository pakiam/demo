describe("Programs page test", () => {
  it("Тест перехода на страницу программ", () => {
    // cy.intercept('GET', '*/programs?*').as('getPrograms');
    // cy.intercept('GET', '*/programs/*').as('getSingleProgram');
    cy.visit("http://localhost:8080/shop/programs");
    cy.contains("h1", "Программы");
    // cy.wait('@getPrograms');
    cy.wait(4000);
    cy.get("[data-test=program-item]").should("have.length.gt", 0);
    cy.get("[data-test=program-item-link-to-page]")
      .should("have.attr", "href")
      .and("match", /\/programs\/.+/);
  });

  it("Тест перехода на страницу программы", () => {
    cy.get("[data-test=program-item-link-to-page]").first().click();
    cy.url().should("match", /\/programs\/.+/);
    // cy.wait('@getSingleProgram');
    cy.wait(4000);

    cy.get("[data-test=program-description]").should("exist");
    cy.go("back");

    cy.get("[data-test=program-item-link-to-page]").last().click();
    // cy.wait('@getSingleProgram');
    cy.wait(4000);

    cy.go("back");
  });

  it("Тест добавления программ в корзину", () => {
    cy.contains("[data-test=cart-text]", "Корзина пуста");
    cy.get("[data-test=program-item-to-cart]").first().click();
    cy.contains("[data-test=cart-text]", "1 программа");

    // Проверка, что надпись на кнпоке изменилась
    cy.get("[data-test=program-item-to-cart]").first().contains('Убрать');

    cy.get("[data-test=program-item-link-to-page]").first().click();
    cy.wait(3000)
    // Проверка, что на странице программы надпись на кнпоке изменилась
    cy.get("[data-test=program-item-full-to-cart]").contains('Убрать');
    cy.get("[data-test=program-item-full-to-cart]").first().click();
    cy.contains("[data-test=cart-text]", "Корзина пуста");

    // Проверка, что на странице программы надпись на кнпоке изменилась
    cy.get("[data-test=program-item-full-to-cart]").contains('В корзину');
    // Проверка, что корзина очистилась
    cy.contains("[data-test=cart-text]", "Корзина пуста");
  });
});
