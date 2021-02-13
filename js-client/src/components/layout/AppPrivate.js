import React, {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MarketmapPage from '../../pages/MarketMap'
import BidPage from '../../pages/BidPage'
import Profile from '../../pages/Profile'
import DashBoard from '../../pages/DashBoard'
import Chat from '../../pages/Chat'
import PrivateRoute from '../utils/PrivateRoute'
import {Switch} from 'react-router-dom';
function AppPrivate() {

    const [width,SetWidth] = useState(60);
    const OpenSideBar = ()=> {
        SetWidth(250);
    }
    const CloseBar = () => {
        SetWidth(60);
    }
    return (<>
        <Header  OpenSideBar={OpenSideBar} CloseBar={CloseBar}/>
        <div className='container'>
          <Sidebar CloseBar={CloseBar} width={width}/>
                <div className={'content'}>
                  <PrivateRoute exact path='/app' component={MarketmapPage}/>
                  <PrivateRoute exact path='/app/networkmarket' component={BidPage}/>
                  <PrivateRoute exact path='/app/profile' component={Profile}/>
                  <PrivateRoute exact path='/app/chat' component={Chat}/>
                  <PrivateRoute exact path='/app/dash' component={DashBoard}/>
                </div>
        </div>
    </>)
}

export default AppPrivate
