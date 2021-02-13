import React, { Fragment } from 'react'
import '../CSS/dashboard.css'
import HouseCard from '../components/utils/HouseCard'
// import {Search} from 'react-feather'
import SearchDashBoard from '../components/layout/SearchDashBoard'
function DashBoard() {
    return (
    <Fragment>
        <div className={"flex-row"}>
            <div className={"flex-column side"} style={{backgroundColor:"white"}}>
                <div className={"profile-container"}>
                </div>
                <div className={"profile-container"}>
                </div>
            </div>
            <div className={"flex-column middle"} style={{backgroundColor:"#white"}}>
                <SearchDashBoard/>
                <HouseCard/>
            </div>
            <div className={"flex-column side"} style={{backgroundColor:"white"}}>
                <div className={"feeds-container"}>

                </div>
                <div className={"feeds-container"}>
                    
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default DashBoard
