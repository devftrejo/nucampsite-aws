const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Promotion', promotionSchema)