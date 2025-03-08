/// <reference types="cypress" />

import fixture from '../fixtures/post_user/post-user-fixtures.json'
import { requestApi } from '../support/api/request-post-user.js'

describe('POST /users', () => {
  it('Register a new user', () => {
    cy.task('deleteUser', fixture.validUser.email)

    requestApi.postUser(fixture.validUser).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include({
        name: fixture.validUser.name,
        email: fixture.validUser.email,
      })
      cy.log(`[FIM] Cadastrado com sucesso: ${JSON.stringify(response.body)}`)
    })
  })




})