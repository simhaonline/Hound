import React, {useState} from 'react'
import Dropdown from '../utils/Dropdown'

function Form() {
    const [banana,setBanana] = useState(undefined)
    return (
        <div className={"form"} style={{"marginTop":"20px"}}>
            <div> 
                <Dropdown placeholder={"Property type"} 
                    value={banana} 
                    onChange={v => setBanana(v)}
                    options={["house","apartment","retirement","holiday","studio"]} 
                />
                <Dropdown placeholder={"Beds"} 
                    value={banana} 
                    onChange={v => setBanana(v)}
                    options={["1","2","3","4","5","6","7","8","8+"]}
                    title={"Property type"}            
                />
            </div>
            <div>
                
            </div>
            <div className={"custom-input"} style={{"paddingLeft":"10px", "padding":"10px"}}>
                <input type={"text"} placeholder={"Min price"} style={{"marginRight":"10px"}}/>
                <input type={"text"} placeholder={"Max price"} style={{"marginTop":"10px"}}/>
            </div>

            <div className={"submit-button"} style={{"float":"right","paddingLeft":"10px"}}>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Form
