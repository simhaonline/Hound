import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import {Provider} from'react-redux'
import store from './Store'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Alert from './components/utils/Alert'
import PrivateRoute from './components/utils/PrivateRoute'
import LoginRoute from './components/utils/LoginRoute'
// import mapDispatchToProps from './reducers/authActions';
import './App.css'
import { connect } from 'react-redux';
import AppPrivate from './components/layout/AppPrivate';

function App() {  
  return (
    <Provider store={store}>
      <Alert/>
        <Router>
           <LoginRoute exact path='/login' component={Login}/>
           <PrivateRoute path='/app'component={AppPrivate}/>
           <Route exact path="/" render={() => <Redirect to="/app" /> }/>
        </Router>
    </Provider>
  );
}

const mapStateToProps = state =>  ({
  auth: state.auth
})
export default App
