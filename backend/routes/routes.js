const Router = require('express').Router()

const citiesController = require('../controllers/citiesControllers')
const itineraryController = require('../controllers/itinerariesControllers')

const {obtainCities, addACity, deleteACity, modifyACity, getASpecificCityByItsId} = citiesController
const {consultAllItineraries, consultItinerariesFromAParticularIDCity, consultOneItineraryByItsId, addNewItinerary, modifyItinerary, deleteItinerary} = itineraryController

Router.route('/cities')
.get(obtainCities)
.post(addACity)

Router.route('/cities/:id')
.delete(deleteACity)
.put(modifyACity)
.get(getASpecificCityByItsId)

Router.route('/itineraries')
.get(consultAllItineraries)
.post(addNewItinerary)

Router.route('/itineraries/:id')
.get(consultOneItineraryByItsId)
.put(modifyItinerary)
.delete(deleteItinerary)

Router.route('/itineraries/city/:id')
.get(consultItinerariesFromAParticularIDCity)

module.exports = Router