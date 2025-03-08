const { MongoClient } = require('mongodb')

const mongoUri =
  'mongodb+srv://correioricardo:mongosqa123@mark85-db.05ok8.mongodb.net/markdb?retryWrites=true&w=majority&appName=mark85-db'

const client = new MongoClient(mongoUri)

async function connect() {
  await client.connect()
  return client.db('markdb')
}

async function disconect() {
  await client.close()
}

module.exports = { connect, disconect }
