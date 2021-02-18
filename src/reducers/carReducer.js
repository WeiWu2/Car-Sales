    import {ADD_CAR_FEATURE, REMOVE_CAR_FEATURE} from '../actions/carAction'

    const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    }

 const carReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case ADD_CAR_FEATURE:
            return {
            additionalPrice: state.additionalPrice + action.payload.price,
            car:{...state.car,
            features:[...state.car.features, action.payload]
        }}
        case REMOVE_CAR_FEATURE:
            const removedFeature = state.car.features.filter((feature) => {
              return feature.id !== action.payload.id
            }) 
            console.log(removedFeature)
            return  {
                additionalPrice: state.additionalPrice - action.payload.price,
                car:{...state.car,
                features:removedFeature
            }}
        default:
            return state;

    }

}
export default carReducer;