import React, {useState} from 'react'
import {Search} from 'react-feather'
import ModalBox from '../utils/ModalBox'
import Form from '../layout/Form'
import Dropdown from '../utils/Dropdown';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../actions/searchActions'
function SearchDashBoard({searchdash: {searchCat,searchInput}, setSearch,setCategory}) {
    console.log("cat:",searchCat)
    console.log("input:",searchInput)
    const [showModal, setShowModal] = useState(false)
    const [dropdownBed,setDropDownBed] = useState(undefined)
    return (
    <div className={"search-container"}>
        <div className={"search-input"}>
            <label >Search new property</label>
            <div className={"flex-row"}>
                <div className={"flex-column-item"}>
                    <input type={"text"} placeholder={" Start Searching .."} onChange={(e) =>  setSearch(e.target.value)} ></input>
                </div>
                <div className={"flex-column-item"} style={{padding:"0px",margin:"0px", width:"10px",flex:"0",paddingRight:"40px",paddingTop:"5px", overflow:"hidden",flexShrink:"0"}}>
                    <Search/>
                </div>
            </div>
        </div>
        <div className={"flex-row"}>
            <div className={"button-containers"}>
                <ModalBox show={showModal} setShow={setShowModal} component={Form}/>
                <button onClick={()=> setShowModal(true)} style={{"backgroundColor":"#f1f1f1"}}>Offer</button>
                <button onClick={() => setCategory("Lease")}>Lease</button>
                <button onClick={() => setCategory("Auction")}>Auction</button>
                <button onClick={() => setCategory("Sell")}>Sell</button>
                <button onClick={() => setCategory("Buy")}>Buy</button>
            </div>
        </div>
        <div className={"flex-row"}>
            <div className={"selector-containers"}>
                <div className={"flex-row"}>
                    <div className={"flex-column-item"}>
                        <div className={"custom-select"}>
                            <select>
                                <option value="Any-Type" style={{"color":"red"}}>Property type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment & Unit</option>
                                <option value="retirement">Retirement Living</option>
                                <option value="holiday">Holiday house</option>
                                <option value="studio">Studio</option>
                            </select>
                        </div>
                    </div>
                    <div className={"flex-column-item"}>
                    <Dropdown placeholder={"Beds"} 
                        value={dropdownBed} 
                        onChange={v => setDropDownBed(v)}
                        options={["1","2","3","4","5","6","7","8","8+"]}
                        title={"Property type"}            
                    />
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
const mapStateToProps = state =>  ({
    searchdash: state.searchdash
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchDashBoard)
