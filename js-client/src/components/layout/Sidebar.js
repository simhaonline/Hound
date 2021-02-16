import React, {useState,Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../CSS/sidebar.css'
import {Layers} from 'react-feather'
import {Map,MessageSquare} from 'react-feather'
import {Compass} from 'react-feather'

const Sidebar = ({width,CloseBar}) => {
    const [selected,SetSelected] = useState(true)
    return (
        <Fragment>
            <div id="mySidebar" className="sidebar" style={{width}}>
                {width > 80 && (
                <Fragment>
                    <a className={"closebtn"} onClick={CloseBar} style={{borderBottom:"none"}}>x</a>
                    <span className="photon" style={{color:"white" ,fontSize:"30px", paddingLeft:"10px"}}>Photon</span>
                    <Link to='/app/explore/market' className='hover-link'>Explore Market</Link>
                </Fragment>)}
                {width <= 80 && (<Fragment>
                    <div className='icon-sidebar-background' tabIndex="1">
                        <Link to='/app/chat'><MessageSquare className='icon-sidebar'/> </Link>
                    </div>
                    <div className='icon-sidebar-background' tabIndex="2">
                        <Link to='/app/dash'><Layers className='icon-sidebar'/> </Link>
                    </div>
                    <div className='icon-sidebar-background' tabIndex="3">
                        <Link to='/app/search/market'><Map className='icon-sidebar'/></Link>
                    </div>
                    <div className='icon-sidebar-background' tabIndex="4">
                        <Link to='/app/networkmarket'><Compass className='icon-sidebar'/></Link>
                    </div>
                </Fragment>)}
            </div>
        </Fragment>
    )
}

export default Sidebar;