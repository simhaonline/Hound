import React, {useState} from 'react'
import Dropdown from '../utils/Dropdown'
import {connect} from 'react-redux';
import mapDispatchToProps from '../../actions/searchActions'
import UploadPic from '../aws/UploadPic'
function Form({setSearchOptions}) {
    const [formOptions,setFormOptions] = useState({
        propType:"Any",
        Beds:3,
        priceMin:1000000,
        priceMax:2000000
    })
    console.log('form:',formOptions)
    const {propType,Beds} = formOptions
    return (
        <div className={"form"} style={{"paddingLeft":"10px"}}>
            <div className={'flex-column-item'} style={{"paddingLeft":"10px"}}>
                <Dropdown placeholder={"Property type"} 
                    value={propType} 
                    onChange={v => setFormOptions({...formOptions,propType:v})}
                    options={["Any","House","Apartment","Retirement","Holiday","Studio"]}
        
                />
            </div>
            <div className={'flex-column-item'} style={{"paddingLeft":"10px"}}>
                <Dropdown placeholder={"Beds"} 
                    value={Beds} 
                    onChange={v => setFormOptions({...formOptions,Beds:v})}
                    options={["1","2","3","4","5","6","7","8","8+"]}
        
                />
            </div>
    
            <div className={'row'}>
                <div className={"custom-input"} style={{"paddingLeft":"0px", "padding":"10px"}}>
                    <div className={"flex-column-item"}>
                        <div>
                            <label>{"Min price"}</label>
                       </div>
                        <input 
                            type={"text"} 
                            placeholder={"Min price"} 
                            style={{"marginRight":"10px"}}
                            onChange={e => {
                                setFormOptions({...formOptions,priceMin:e.target.value})
                            }}
                            />
                    </div>
                    <div className={"flex-column-item"}>
                        <div style={{"marginTop":"10px"}}>
                            <label>{"Max price"}</label>
                        </div>
                    <input type={"text"} 
                        placeholder={"Max price"} 
                        
                        onChange={e => {
                            setFormOptions({...formOptions,priceMax:e.target.value})
                        }}
                        />
                    </div>  
                </div>
            </div>
            <UploadPic/>
            <div className={"flex-column-item"}>
                <div >
                    <button onClick={v => setSearchOptions(formOptions)}>Submit</button>
                </div>  
            </div>
                         
            
        </div>
    )
}

const mapStateToProps = state =>  ({
    searchdash: state.searchdash
})
export default connect(mapStateToProps,mapDispatchToProps)(Form)
