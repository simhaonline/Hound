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
                    <span className="proton" style={{color:"white" ,fontSize:"30px"}}><i class="fas fa-atom"></i> Proton</span>
                    <Link to='/explore/market'>Explore Market</Link>
                </Fragment>)}
                {width <= 80 && (<Fragment>
                    <div className='icon-hover' style={{color:'white'}}>
                        <Layers style={{margin:'10px',marginLeft:'15px'}}/>
                    </div>
                    <div className='icon-hover' style={{background:'white',color:'black'}}>
                        <Map style={{margin:'10px',marginLeft:'15px',marginTop:'20px'}}/>
                    </div>
                    <div className='icon-hover' style={{color:'white'}}>
                        <Compass style={{margin:'10px',marginLeft:'15px',marginTop:'20px'}}/>
                    </div>
                </Fragment>)}
            </div>
        </Fragment>
    )
}

export default Sidebar;