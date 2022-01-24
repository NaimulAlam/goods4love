const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    ocupation: { type: String, required: false },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  { collection: 'allUsers' }
);

User.methods.toJSON = function () { 
  let obj = this.toObject();
  delete obj.password;
  return obj;
}

const model = mongoose.model('UserData', User);

module.exports = model;