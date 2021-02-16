import {Link} from 'react-router-dom'
import '../../CSS/header.css'
import React from 'react';
import {AUTH_LOGOUT} from '../../actions/types'
import { useDispatch } from 'react-redux'
import Image from "../../images/Tommy.jpg"
import ProfileImageIcon from './ProfileImageIcon'
import DogIcon from '../../icons/dog-logo.svg'
const Header = ({OpenSideBar}) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({type:AUTH_LOGOUT})
    localStorage.removeItem('PhotonToken')
  }
{/* <i class="fas fa-user" style={{paddingRight:"5px"}}></i> */}
{/* <i class="fas fa-atom"></i> */}
  return (
    <header className="header">
      <div className="navbar" >
        <div className="logo">
          <div className="opn-button"><button className={'openbtn'} onClick={OpenSideBar}> ☰ </button></div>
          <div className="hound">
            <h1>
              <span className="photon"> <img src={DogIcon} style={{"width":"40px","height":"40px"}}/>Hound</span>
            </h1>
          </div>
        </div>
        <nav className="icons-nav">
          <ul>
            <li><Link to='/app' style={{textDecoration:"none"}}><i className={"fas fa-home"} style={{paddingRight:"5px"}}></i>Home</Link></li>
            <li><Link to='/app/profile' style={{textDecoration:"none"}}><ProfileImageIcon srcImg={Image}/></Link></li>
            <li onClick={logout}><Link to='/app' style={{textDecoration:"none"}}><i class="fas fa-sign-out-alt" style={{paddingRight:"5px"}}></i>Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
