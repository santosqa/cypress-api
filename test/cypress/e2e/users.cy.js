/// <reference types="cypress" />
 
describe('POST /users', () => {
  
  it('Register a new user', () => {

    const user = {
      name: 'SQA test',
      email: 'J9TtX@example.com', 
      password: '123456'
    }

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then((response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', user.name)
      expect(response.body).to.have.property('email', user.email)
    }))

  })




})