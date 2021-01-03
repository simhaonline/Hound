import React, {useState,useEffect} from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MarketmapPage from './pages/MarketMap'
import BidPage from './pages/BidPage'
import {Provider} from'react-redux'
import store from './Store'
import Profile from './pages/Profile'
import DashBoard from './pages/DashBoard'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Alert from './components/utils/Alert'
import Chat from './pages/Chat'
import './App.css'

function App() {
  const [width,SetWidth] = useState(60);
    const OpenSideBar = (width)=> {
        SetWidth(250);
    }
    const CloseBar = () => {
        SetWidth(60);
    }
    
    const [auth,setAuth] = useState(true)
  return (
    <Provider store={store}>
      <Alert/>
      {!auth && 
        <Router>
           <Route exact path='/' component={Login}/>
        </Router>
      }
      {auth && <Router>
        <Header  OpenSideBar={OpenSideBar} CloseBar={CloseBar}/>
        <div className='container'>
          <Sidebar CloseBar={CloseBar} width={width}/>
          {/* <div className={"content"}> */}
            <Switch>
                <div className={'content'}>
                  <Route exact path='/' component={MarketmapPage}/>
                  <Route exact path='/network/market' component={BidPage}/>
                  <Route exact path='/profile' component={Profile}/>
                  <Route exact path='/chat' component={Chat}/>
                  <Route exact path='/post' component={DashBoard}/>
                </div>
            </Switch>
          {/* </div> */}
        </div>
      </Router>
      }
    </Provider>
  );
}

export default App;
