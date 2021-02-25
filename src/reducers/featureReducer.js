import { ADD_FEATURE, REMOVE_FEATURE} from '../actions/featureAction'

const initialState = {
additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500, added:false },
    { id: 2, name: 'Racing detail package', price: 1500, added:false },
    { id: 3, name: 'Premium sound system', price: 500, added:false },
    { id: 4, name: 'Rear spoiler', price: 250, added:false }
  ]
}

const featureReducer = (state = initialState, action) => {

switch(action.type)
{
    case ADD_FEATURE:

       const addedFeature = state.additionalFeatures.map((feature) => {
           if(feature.id === action.payload.id)  
                return {...feature, added:true}
            else 
                return {...feature}
       })

       return {additionalFeatures:addedFeature}
    case REMOVE_FEATURE : 
        const removedFeature = state.additionalFeatures.map((feature) => {
        if(feature.id === action.payload.id)  
             return {...feature, added:false}
         else 
             return {...feature}
    })

    return {additionalFeatures:removedFeature}
    
    default:
        return state;

}

}
export default featureReducer;