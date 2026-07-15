const mongoose = require('mongoose');

function connectDB(uri) {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch(err => {
      console.error('MongoDb connection error:', err.message);
      process.exit(1);
    });
}

module.exports = connectDB;
