const mongoose = require('mongoose');

const Donations = new mongoose.Schema(
    {
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        cause: { type: String, required: true },
        amount: { type: String, required: true },
        oldEmail: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        city: { type: String, required: true },
        uid: { type: String, required: true },
    },
    { collection: 'donations' }
);

const model = mongoose.model('DonationsData', Donations);

module.exports = model;
