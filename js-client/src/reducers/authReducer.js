import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_USER
} from '../actions/types';



const initialState = {
    isAuth:false,
    token:undefined,
    firstName:"",
    lastName:""
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_LOGIN:
            const {firstName,lastName,token} = action.payload;
            console.log('auth reducer:',action.payload)
            return {...state,firstName,lastName,token,isAuth:true};
        case AUTH_LOGOUT:
            console.log('auth logout:',initialState)
            return {...initialState};
        case AUTH_USER:
            return {...state,isAuth:true,token:action.payload};
        default:
            return state;
    }
}

export default authReducer;