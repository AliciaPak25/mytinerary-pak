const mongoose = require('mongoose'); 

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number},
    duration: {type: String, required: true},
    likes: {type: Number, default: 0},
    hashtag1: {type: String, required: true},
    hashtag2: {type: String, required: true},
    hashtag3: {type: String, required: true},
    hashtag4: {type: String, required: false},
    comments: {type: String, required: true},
    city: {type: mongoose.Types.ObjectId, ref: 'cities', required: true}
});

const ItineraryModel = mongoose.model('itineraries', itinerarySchema);

module.exports = ItineraryModel;
