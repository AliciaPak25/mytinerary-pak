const Router = require('express').Router()

const citiesController = require('../controllers/citiesControllers')

const {obtainCities, addACity, deleteACity, modifyACity, getASpecificCityByItsId} = citiesController

Router.route('/cities')
.get(obtainCities)
.post(addACity)

Router.route('/cities/:id')
.delete(deleteACity)
.put(modifyACity)
.get(getASpecificCityByItsId)

module.exports = Router