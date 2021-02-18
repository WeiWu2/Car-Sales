export const ADD_CAR_FEATURE = "ADD_CAR_FEATURE" 
export const REMOVE_CAR_FEATURE = "REMOVE_CAR_FEATURE"

export const addCarFeature = (id) => {
    return {type:ADD_CAR_FEATURE, payload: id}
}

export const removeCarFeature = (id) => {
    return {type:REMOVE_CAR_FEATURE, payload: id}
}

