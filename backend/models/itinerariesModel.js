const mongoose = require('mongoose'); 

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: String, required: true},
    likes: {type: Array},
    hashtag1: {type: String, required: true},
    hashtag2: {type: String, required: true},
    hashtag3: {type: String, required: true},
    hashtag4: {type: String, required: false},
    comments: {type: String},
    city: {type: mongoose.Types.ObjectId, ref: 'cities', required: true},
    
});

const ItineraryModel = mongoose.model('itineraries', itinerarySchema);

module.exports = ItineraryModel;
