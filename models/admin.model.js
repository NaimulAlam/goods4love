const mongoose = require('mongoose');

const Admin = new mongoose.Schema(
    {
        adminEmail: { type: String, required: true, unique: true },
        userEmail: { type: String, required: true },
    },
    { collection: 'admin' }
);

const model = mongoose.model('AdminData', Admin);

module.exports = model;
