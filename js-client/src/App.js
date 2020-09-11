import React, {useState,useEffect} from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MarketmapPage from './pages/MarketMap'
function App() {
  const [width,SetWidth] = useState(60);
    const OpenSideBar = (width)=> {
        SetWidth(250);
    }
    const CloseBar = () => {
        SetWidth(60);

    }
  return (
      <Router>
        <Header  OpenSideBar={OpenSideBar}/>
        <div className='container'>
        <Sidebar CloseBar={CloseBar} width={width}/>
        <Switch>
            <div className='content'>
              <Route exact path='/' component={MarketmapPage}/>
            </div>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
