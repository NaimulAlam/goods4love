const mongoose = require('mongoose');

const AddDonation = new mongoose.Schema(
    {
        donationTitle: { type: String, required: true },
        description: { type: String, required: true },
        adminEmail: { type: String, required: true },
    },
    { collection: 'AddDonation' }
);

const model = mongoose.model('AddDonationsData', AddDonation);

module.exports = model;
