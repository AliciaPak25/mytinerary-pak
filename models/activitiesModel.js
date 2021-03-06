const mongoose = require('mongoose'); 

const activitySchema = new mongoose.Schema({
    activityName: {type: String, required: true},
    activityImage: {type: String, required: true},
    itineraryId: {type: mongoose.Types.ObjectId, ref: 'itineraries', required: true}
});

const ActivitiesModel = mongoose.model('activities', activitySchema);

module.exports = ActivitiesModel;