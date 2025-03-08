const { defineConfig } = require('cypress')
const { connect } = require('./cypress/support/mongo')
const { disconect } = require('./cypress/support/mongo')

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      const db = await connect()
      on('task', {
        async deleteUser(email) {
          await db.collection('users').deleteMany({ email: email })
          return null
        },
        async closeDatabase() {
          await disconect()
          return null
        },
      })
    },
    baseUrl: 'http://localhost:3333',
  },
})
