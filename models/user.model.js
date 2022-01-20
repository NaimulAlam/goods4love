const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    city: {type: String, required: true},
    zipCode: {type: String, required: true},
  },
  {collection: 'allUsers'}
)

const model = mongoose.model('UserData', User);

module.exports = model;