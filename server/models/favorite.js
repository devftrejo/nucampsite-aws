const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);