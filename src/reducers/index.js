import {combineReducers} from 'redux'
import carReducer from './carReducer'
import featureReducer from './featureReducer'



export default combineReducers({
    car: carReducer,
    feature: featureReducer
   
   });