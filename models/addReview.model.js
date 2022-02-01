const mongoose = require('mongoose');

const AddReview = new mongoose.Schema(
    {
        review: { type: String, required: true },
        uid: { type: String, required: true },
        email: { type: String, required: true },
    },
    { collection: 'AddReview' }
);

const model = mongoose.model('AddReviewsData', AddReview);

module.exports = model;
