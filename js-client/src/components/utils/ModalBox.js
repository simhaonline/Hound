import React from 'react'
import PropTypes from 'prop-types'

function ModalBox({component:Component,show = false,setShow}) {
    const displayStyle = show?"block":"none"
    const closeModal = () => setShow(false)

    return (
        <div className={"modal-box"} style={{"display":displayStyle}}>
            <div className={"modal-content"} >
                <span onClick={closeModal} className={"close-modal"}>&times;</span>
                <div className={"modal-content-in"}><Component/></div>
            </div>
        </div>
    )
}

// ModalBox.propTypes = {
//     component: PropTypes.any.isRequired,
//     display:PropTypes.bool.isRequired,
//     setShow:PropTypes.func.isRequired
// }

export default ModalBox


