const createDalInstance = require('./blog.dal');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const databaseName = 'entries';
const client = new MongoClient(url, { useNewUrlParser: true });

const instance = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(databaseName);
};

module.exports = databaseInstance = createDalInstance({ instance })

