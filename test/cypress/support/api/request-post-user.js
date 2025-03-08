class RequestApi {
  postUser(user) {
    return cy.api({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false   
    }).then(response => { return response })
  }


}


export const requestApi = new RequestApi();