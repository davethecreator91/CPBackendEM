
const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    vehicle: {
        type: String,
        required: true,
    },
    peak: {
        type: String,
        required: true,
    },
    ezpass: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
    QHtunnelsExit: {
        type: String,
        required: true,
    },
    tollPrice: {
        type: Number,
        required: false,
    },
    tollCredits: {
        type: Number,
        required: false,
    },
    totalToll: {
        type: Number,
        required: false,
    }
})


const trip = mongoose.model('trip', tripSchema);

module.exports = trip;