const Router = require('express').Router()
const validator = require('../config/validator')

const citiesController = require('../controllers/citiesControllers')
const itineraryController = require('../controllers/itinerariesControllers')
const usersController = require('../controllers/usersControllers')
const activitiesController = require('../controllers/activitiesControllers')
const commentsController = require('../controllers/commentsControllers')

const {obtainCities, addACity, deleteACity, modifyACity, getASpecificCityByItsId} = citiesController
const {consultAllItineraries, consultItinerariesFromAParticularIDCity, consultOneItineraryByItsId, addNewItinerary, modifyItinerary, deleteItinerary, likesAndDislikes} = itineraryController
const {signUpUser , signInUser, signOutUser, verifyEmail, verifyToken} = usersController
const {obtainActivities, addActivities, deleteActivities, modifyActivities, getSomeSpecificActivitiesByItsId, getActivitiesFromAParticularIDItinerary} = activitiesController
const {addComment, modifyComment, deleteComment} = commentsController
const passport = require('../config/passport')

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

Router.route('/auth/signUp')
.post(validator, signUpUser)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{session:false}), verifyToken)

Router.route('/itineraries/likes&dislikes/:id')
.put(passport.authenticate('jwt',{session:false}), likesAndDislikes)

Router.route('/activities')
.get(obtainActivities)
.post(addActivities)

Router.route('/activities/:id')
.get(getSomeSpecificActivitiesByItsId)
.put(modifyActivities)
.delete(deleteActivities)

Router.route('/activities/itinerary/:itineraryId')
.get(getActivitiesFromAParticularIDItinerary)

Router.route('/itineraries/comments')
.post(passport.authenticate('jwt', {session: false}), addComment)


Router.route('/itineraries/comments/:id')
.post(passport.authenticate('jwt', {session: false}), deleteComment)
.put(passport.authenticate('jwt', {session: false}), modifyComment)

module.exports = Router