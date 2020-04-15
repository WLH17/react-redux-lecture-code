import axios from 'axios';

const initialState = {
    characters: [],
    loading: false,
    errorMessage: ''
}

const GET_CHARACTERS = 'GET_CHARACTERS';

//When using promise middleware, you are more easily able to handle
//axios requests. Include the axios request in your action, and make
//the response your actions payload.
export function getCharacters(){
    const characterArr = axios.get("https://pokeapi.co/api/v2/pokemon/1/")
                         .then(res => res.data)
                         .catch(err => err.message);

    return {
        type: GET_CHARACTERS,
        payload: characterArr
    }
}

export default function starWarsReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        //The promise object has three phases: pending, fulfilled,
        //and rejected. Include a case for each of these phases.
        case GET_CHARACTERS + '_PENDING':
            return {...state, loading: true};
        case GET_CHARACTERS + '_FULFILLED':
            return {...state, characters: payload, loading: false};
        case GET_CHARACTERS + '_REJECTED':
            return {...state, errorMessage: payload, loading: false};
        default:
            return state;
    }
}