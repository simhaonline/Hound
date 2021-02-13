import React from 'react'

function ProfileImageIcon({srcImg, size = 20, label='Profile'}) {
    return (
        <div className={"profile-pic-icon"}> 
            <img src={srcImg} style={{width:size+'px',height:size + 'px'}}/>
            {label && <span>{label}</span>}
        </div>
    )
}

export default ProfileImageIcon
