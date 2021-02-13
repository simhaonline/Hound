import React from 'react';
import Image from '../../images/33darl2.jpg'
import ProfileImageIcon from '../layout/ProfileImageIcon'
import UserImg from '../../images/Tommy.jpg'
function HouseCard({bedrooms = 0,bathrooms = 0,garage = 0,type = 'Any', price= '3,000,000' }) {
    return (
        <div className={"feeds-container"}>
            <div className={"flex-row"}>
                <div className={"house-picture"}>
                    <img src={Image}/>
                </div>
            </div>
            <div className={"flex-row"}>
                    <div className={"house-info"}>
                    <div className={"house-props-items"}>
                        <div className={"house-item"}><ProfileImageIcon srcImg={UserImg} label={false} size={50}/></div>
                        <div className={"house-item"}><div className={"house-price"}> $ {price} AUD</div></div>
                    </div>
                    <div className={"house-props-items"}>
                        <div className={"house-item"}>Type {type}</div>
                        <div className={"house-item"}>Bedrooms {bedrooms}</div>
                        <div className={"house-item"}>Bathrooms {bathrooms}</div>
                        <div className={"house-item"}>Garage {garage}</div>
                    </div>
            </div>
        </div>
        </div>

    )
}

export default HouseCard
