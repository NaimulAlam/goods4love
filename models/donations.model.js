const mongoose = require('mongoose');

const Donations = new mongoose.Schema(
    {
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        cause: { type: String, required: true },
        amount: { type: String, required: true },
        uid: { type: String, required: false },
        oldEmail: { type: String, required: false },
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        city: { type: String, required: false },
        zipCode: { type: String, required: false },
    },
    { collection: 'donations' }
);

const model = mongoose.model('DonationsData', Donations);

module.exports = model;
