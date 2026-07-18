const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

function connect() {
  return MongoMemoryServer.create().then(server => {
    mongoServer = server;
    return mongoose.connect(server.getUri());
  });
}

function closeDatabase() {
  return mongoose.connection
    .dropDatabase()
    .then(() => mongoose.connection.close())
    .then(() => mongoServer.stop());
}

function clearDatabase() {
  const collections = mongoose.connection.collections;
  const promises = Object.values(collections).map(collection =>
    collection.deleteMany({}),
  );
  return Promise.all(promises);
}

module.exports = { connect, closeDatabase, clearDatabase };
