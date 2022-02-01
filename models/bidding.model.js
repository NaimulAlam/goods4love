const mongoose = require('mongoose');

const Bidding = new mongoose.Schema(
    {
        biddingName: { type: String, required: true },
        biddingDescription: { type: String, required: true },
        initialBid: { type: String, required: true },
        biddingAmount: { type: String, required: true },
        bidderEmail: { type: String, required: false },
        uid: { type: String, required: true },
        BiddingId: { type: String, required: true, unique: true },
    },
    { collection: 'Bidding' }
);

const model = mongoose.model('BiddingData', Bidding);

module.exports = model;
