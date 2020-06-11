it("Есть кнопка Отправить", () => {
  cy.visit("http://localhost:8080/admin#/login");

  const btn = cy.get(".btn");
  
  btn.should("to.be.visible")
    .and('have.attr', 'type', 'submit');
})