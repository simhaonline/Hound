import React, {useState,Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../CSS/sidebar.css'
import {Layers} from 'react-feather'
import {Map} from 'react-feather'
import {Compass} from 'react-feather'
const Sidebar = ({width,CloseBar}) => {
    const [selected,SetSelected] = useState(true)
    return (
        <Fragment>
            <div id="mySidebar" class="sidebar" style={{width}}>
                {width > 80 && (
                <Fragment>
                    <a href="javascript:void(0)" className="closebtn" onClick={CloseBar} style={{borderBottom:"none"}}>x</a>
                    <span className="proton" style={{color:"white" ,fontSize:"30px"}}><i class="fas fa-atom"></i> Photon</span>
                    <Link to='/explore/market' className='hover-link'>Explore Market</Link>
                </Fragment>)}
                {width <= 80 && (<Fragment>
                    <div className='icon-sidebar-background' tabIndex="1">
                        <Link to='/explore/market'><Layers className='icon-sidebar'/> </Link>
                    </div>
                    <div className='icon-sidebar-background' tabIndex="2">
                        <Link to='/search/market'><Map className='icon-sidebar'/></Link>
                    </div>
                    <div className='icon-sidebar-background' tabIndex="3">
                        <Link to='/network/market'><Compass className='icon-sidebar'/></Link>
                    </div>
                </Fragment>)}
            </div>
        </Fragment>
    )
}

export default Sidebar;