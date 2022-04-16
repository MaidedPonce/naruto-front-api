import { SET_FAVORITE } from "../actions/types";

const initialState = {
    list: []
}

const narutoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            return {...state, list: action.payload}    
        default:
            return {...state}
    }
}

export default narutoReducer