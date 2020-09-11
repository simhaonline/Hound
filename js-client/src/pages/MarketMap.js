import React, {Fragment} from 'react'
import MarketMap from '../components/Graphs/MarketMap'


function MarketMapPage() {
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


export default MarketMapPage
