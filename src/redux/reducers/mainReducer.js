import { combineReducers } from "redux";
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './itinerariesReducer';
import citiesReducer from "./citiesReducer";

const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer
})

export default mainReducer