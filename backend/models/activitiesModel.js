const mongoose = require('mongoose'); 

const activitySchema = new mongoose.Schema({
    name: {type: Array, required: true},
    image: {type: Array, required: true},
    itinerary: {type: mongoose.Types.ObjectId, ref: 'itineraries', required: true}
});

const ActivitiesModel = mongoose.model('activities', activitySchema);

module.exports = ActivitiesModel;