const mongoose = require('mongoose');

const Admin = new mongoose.Schema(
    {
        adminEmail: { type: String, required: true, unique: true },
        user: { type: String, required: true, unique: false },
    },
    { collection: 'AdminData' }
);

const model = mongoose.model('AdminData', Admin);

module.exports = model;
