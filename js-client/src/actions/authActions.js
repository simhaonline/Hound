import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from './types'
import {graphqlLogin} from '../graphql_client/graphqlAuth'
import {alertSuccess,alertError} from '../helper_functions/alerts';

const setLogin = (email,password) => async dispatch => {
    try {
        const data = await graphqlLogin(email,password)
        const  {login: {token}} = data;
        if (token) {
            localStorage.setItem('PhotonToken',token)
        }
        dispatch({
            type:AUTH_LOGIN,
            payload:{...data.login}
        })
        alertSuccess("Welcome to photon!");
    } catch(e) {
        alertError("Invalid email or password");
    }

    
}

const setAuthUser = (token) => async dispatch => {
    dispatch({
        type:AUTH_LOGIN,
        payload:token
    })
}


const setLogout = () => dispatch => {
    dispatch({
        type:AUTH_LOGOUT
    })
}

export {setLogin,setAuthUser,setLogout} ;


