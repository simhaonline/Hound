import React from 'react'

function ProfileImageIcon({srcImg}) {
    return (
        <div className={"profile-pic-icon"}> 
            <img src={srcImg} />
            <span> Profile </span>
        </div>
    )
}

export default ProfileImageIcon
