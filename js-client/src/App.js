import React, {useState,useEffect} from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MarketmapPage from './pages/MarketMap'
import BidPage from './pages/BidPage'
import {Provider} from'react-redux'
import store from './Store'
import Profile from './pages/Profile'
import 'react-toastify/dist/ReactToastify.css';
// import Login from './pages/Login'
import Alert from './components/utils/Alert'

function App() {
  const [width,SetWidth] = useState(60);
    const OpenSideBar = (width)=> {
        SetWidth(250);
    }
    const CloseBar = () => {
        SetWidth(60);
    }
    
    const [auth,setAuth] = useState(false)
  return (
    <Provider store={store}>
      <Alert/>
        {/* {auth && 
        <Router>
           <Route exact path='/' component={Login}/>
        </Router>
        } */}    
      <Router>
        <Header  OpenSideBar={OpenSideBar}/>
        <div className='container'>
          <Sidebar CloseBar={CloseBar} width={width}/>
          <Switch>
              <div className='content'>
                <Route exact path='/' component={MarketmapPage}/>
                <Route exact path='/network/market' component={BidPage}/>
                <Route exact path='/profile' component={Profile}/>
              </div>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
