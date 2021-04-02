import * as types from '../actions/ActionTypes'

const INITIAL_STATE = {
    movies: []
}

export default function movie(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_MOVIES :
            return {
                ...state,
                movies: action.movies
            }
        default: 
            return state    
    }
}