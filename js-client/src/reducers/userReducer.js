import {
    GET_USER,
    SET_LOADING,
    USER_ERROR
} from '../actions/types'


const initialState = {
    userid:null,
    loading:false,
    error:null,
    token:undefined,
    firstName:""
}


export default (state = initialState,action) => {
    switch(action.type) {
        case GET_USER:
            return {
            ...state,
            userid:action.payload,
            loading:false
        }
        case SET_LOADING:
            return  {...state,loading:true}
        case USER_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}