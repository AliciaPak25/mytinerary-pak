import { combineReducers } from "redux";
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './itinerariesReducer';

const mainReducer = combineReducers({
    itinerariesReducer,
    activitiesReducer
})

export default mainReducer