import React, {Fragment,useEffect} from 'react'
import MarketMap from '../components/Graphs/MarketMap'
import {connect} from 'react-redux'
import {getUser} from '../actions/userActions'
function MarketMapPage({user: {userid,loading}, getUser}) {
    
    useEffect(() => {
        getUser()
    }, [])
    
    
    const data = [
            {"circle":{"coordinates":[-41.28,174.77]}},
            {"circle":{"coordinates":[-41.29,174.76]}},
            {"circle":{"coordinates":[-41.30,174.79]}},
            {"circle":{"coordinates":[-41.27,174.80]}},
            {"circle":{"coordinates":[-41.29,174.78]}}
        ]
    return (
        <body>
            <MarketMap data={data}/>
        </body>

    )
}

// MarketMap.propTypes = {
//     user:propTypes.object.isRequired
// }


const mapStateToProps = state => ({
    user:state.user
})
export default connect(
    mapStateToProps,
    {getUser}
    )(MarketMapPage);
