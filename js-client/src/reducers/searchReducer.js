import {
    SEARCH_INPUT,
    SEARCH_CAT,
    SET_LOADING,
    SEARCH_OPT,
} from '../actions/types'


const initialState = {
    searchInput:"",
    searchCat:"", // this could be buy, sell, auction , etc.
    searchLoading:true,
    offerOptions:{},
    searchOptions: {
        propType:"",
        Beds:3,
        priceMin:1000000,
        PriceMax:2000000
    }
}



const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_INPUT:
            return {...state,searchInput:action.payload}
        case SEARCH_CAT:
            return {...state,searchCat:action.payload}
        case SEARCH_OPT:
            return {...state, searchOptions:{...action.payload}}
        case SET_LOADING:
            return {...state,searchLoading:action.payload}
        default:
            return state;

    }
}

export default searchReducer;