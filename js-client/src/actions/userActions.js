import {GET_USER,
        SET_LOADING,
        USER_ERROR
    } from './types'

export const getUser = () => async (dispatch) => {
        try {
            setLoading()
            const data = {userid:'banana'}
            dispatch({
                type:GET_USER,
                payload:data
            });
        } catch (err) {
            dispatch({
                type:USER_ERROR,
                payload:err.response.data
            })
        }
};



export const setLoading = () => {
    return {type:SET_LOADING}
}