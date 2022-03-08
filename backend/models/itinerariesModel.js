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
    hashtag4: {type: String, required: true},
    buttonMore: {type: String, required: true},
    buttonLess: {type: String, required: true},
    comments: {type: String, required: true}
});

const ItineraryModel = mongoose.model('itineraries', itinerarySchema);

module.exports = ItineraryModel;
