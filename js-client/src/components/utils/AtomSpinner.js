import React from 'react'
import '../../CSS/spinner.css'
const AtomSpinner = () => {
    return (
        <div class="atom-spinner" style={{marginLeft:"50%",marginRight:"50%",marginBottom:"5%"}}>
                <div class="spinner-inner">
                    <div class="spinner-line"></div>
                    <div class="spinner-line"></div>
                    <div class="spinner-line"></div>
                    <div class="spinner-circle">
                    &#9679;
                    </div>
                </div>
        </div>
    )
}

export default AtomSpinner
