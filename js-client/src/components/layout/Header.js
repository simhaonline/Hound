import {Link} from 'react-router-dom'
import '../../CSS/header.css'
import React from 'react';
const Header = ({OpenSideBar}) => {
  return (
    <header className="header">
      <div className="navbar" >
          <h1>
          {(<button class='openbtn' onClick={OpenSideBar}> ☰ </button>)}
            <span className="proton"><i class="fas fa-atom"></i> Photon</span>
          </h1>
          <nav>
            <ul>
              <li><Link to='/' style={{textDecoration:"none"}}><i class="fas fa-home" style={{paddingRight:"5px"}}></i>Home</Link></li>
              <li><Link to='/profile' style={{textDecoration:"none"}}><i class="fas fa-user" style={{paddingRight:"5px"}}></i>Profile</Link></li>
              <li><Link to='/profile' style={{textDecoration:"none"}}><i class="fas fa-sign-out-alt" style={{paddingRight:"5px"}}></i>Logout</Link></li>
              
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header
