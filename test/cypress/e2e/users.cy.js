/// <reference types="cypress" />
 
describe('POST /users', () => {
  
  it('Register a new user', () => {

    const user = {
      name: 'SQA test',
      email: 'J9TtXa@example.com', 
      password: '123456'
    }
   
    /* 
    * Deletar usuário antes de cadastrar
    * para garantir que a massa esteja sempre limpa para o uso. 
    */
    cy.task('deleteUser', user.email)

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then((response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', user.name)
      expect(response.body).to.have.property('email', user.email)
      cy.log("[FIM] Cadastrado com sucesso: " + JSON.stringify(response.body))
    }))

  })




})