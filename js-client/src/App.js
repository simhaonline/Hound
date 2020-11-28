import React, {useState,useEffect} from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MarketmapPage from './pages/MarketMap'
import BidPage from './pages/BidPage'
import {Provider} from'react-redux'
import store from './Store'

function App() {
  const [width,SetWidth] = useState(60);
    const OpenSideBar = (width)=> {
        SetWidth(250);
    }
    const CloseBar = () => {
        SetWidth(60);

    }
  return (
    <Provider store={store}>
        <Router>
          <Header  OpenSideBar={OpenSideBar}/>
          <div className='container'>
          <Sidebar CloseBar={CloseBar} width={width}/>
          {/* {alert.message &&
            <div className={`alert-${alert.type}`}>{alert.message}</div>} */}
          <Switch>
              <div className='content'>
                <Route exact path='/' component={MarketmapPage}/>
                <Route exact path='/network/market' component={BidPage}/>
              </div>
          </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
