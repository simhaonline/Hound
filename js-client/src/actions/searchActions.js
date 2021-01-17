import searchReducer from '../reducers/searchReducer';
import {
    SEARCH_CAT,
    SEARCH_INPUT,
    SEARCH_OPT
} from './types';



const searchActions = dispatch => {
    return {
        setSearch: (input) =>  {
            dispatch({
                type:SEARCH_INPUT,
                payload:input
            })
        },
        setCategory: (cat) => {
            dispatch({
                type:SEARCH_CAT,
                payload:cat
            })
        },
        setSearchOptions: (options) => {
            dispatch({
                type: SEARCH_OPT,
                payload:options
            })
        }
    }
    
}

export default searchActions;