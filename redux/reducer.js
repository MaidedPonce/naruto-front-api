import { add_favorite } from "./actions";

const INIT_STATE = {
    favorites: []
}

console.log(INIT_STATE)

export const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case add_favorite:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            break;
        default:
        return { ...state}
        break
    }
}

