import { combineReducers } from "redux";
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './itinerariesReducer';
import citiesReducer from "./citiesReducer";
import userReducer from './userReducer';

const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    userReducer,
    activitiesReducer
})

export default mainReducer