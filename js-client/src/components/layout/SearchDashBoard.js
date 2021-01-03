import React from 'react'
import {Search} from 'react-feather'

function SearchDashBoard() {
    return (
    <div className={"search-container"}>
        <div className={"search-input"}>
            <label >Search new property</label>
            <div className={"flex-row"}>
                <div className={"flex-column-item"}>
                    <input type={"text"} placeholder={" Start Searching .."}></input>
                </div>
                <div className={"flex-column-item"} style={{padding:"0px",margin:"0px", width:"10px",flex:"0",paddingRight:"40px",paddingTop:"5px", overflow:"hidden",flexShrink:"0"}}>
                    <Search/>
                </div>
            </div>
        </div>
        <div className={"flex-row"}>
            <div className={"button-containers"}>
                <button>Lease</button>
                <button>Auction</button>
                <button>Sell</button>
                <button>Buy</button>
            </div>
        </div>
        <div className={"flex-row"}>
            <div className={"selector-containers"}>
                <div className={"flex-row"}>
                    <div className={"flex-column-item"}>
                        <div className={"custom-select"}>
                            <select>
                                <option value="Any-Type">Property type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment & Unit</option>
                                <option value="retirement">Retirement Living</option>
                                <option value="holiday">Holiday house</option>
                                <option value="studio">Studio</option>
                            </select>
                        </div>
                    </div>
                    <div className={"flex-column-item"}>
                        <select>
                            <option value="Any-Bed">Beds</option>
                        </select>
                    </div>
                    <div className={"flex-column-item"}>
                        <select>
                            <option value="Any-Price-Min">Price (Min)</option>
                        </select>
                    </div>
                    <div className={"flex-column-item"}>
                        <select>
                            <option value="Any-Price-Max">Price (Max)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchDashBoard
