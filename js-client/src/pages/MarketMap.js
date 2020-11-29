import React, {Fragment,useEffect} from 'react'
import MarketMap from '../components/Graphs/MarketMap'
import {connect} from 'react-redux'
import {getUser} from '../actions/userActions'
function MarketMapPage({user: {userid,loading}, getUser}) {
    
    useEffect(() => {
        // console.log(getUser())
    }, [])
    
    const randomFloat = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const createData = () => {
        let data = []
        for( let i = 0; i < 100; i++) {
            const node = {"circle":{"coordinates":[(-2*randomFloat(0,1) + 1)*randomFloat(0,90),(-2*randomFloat(0,1) + 1) *randomFloat(0,180)]}}
            data.push(node)
        }
        return data

    }

    return (
        <body>
            <MarketMap data={createData()}/>
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
