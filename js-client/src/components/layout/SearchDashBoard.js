import React, {useState} from 'react'
import {Search} from 'react-feather'
import ModalBox from '../utils/ModalBox'
import Form from '../layout/Form'
import Dropdown from '../utils/Dropdown';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../actions/searchActions'
function SearchDashBoard({searchdash: {searchCat,searchInput,searchOptions}, setSearch,setCategory,setSearchOptions}) {
    const {propType,Beds,priceMin,priceMax} = searchOptions
    const [showModal,setShowModal] = useState(false)
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
                        <Dropdown placeholder={"Property type"} 
                            value={propType} 
                            onChange={v => setSearchOptions({...searchOptions,propType:v})}
                            options={["Any","House","Apartment","Retirement","Holiday","Studio"]}
                            title={"Property type"}            
                        />
                    </div>
                    <div className={"flex-column-item"}>
                    <Dropdown placeholder={"Beds"} 
                        value={Beds} 
                        onChange={v => setSearchOptions({...searchOptions,Beds:v})}
                        options={["1","2","3","4","5","6","7","8","8+"]}
                        title={"Beds"}            
                    />
                    </div>
                    <div className={"flex-column-item"}>
                        <Dropdown placeholder={"Price (Min)"} 
                            value={priceMin} 
                            onChange={v => setSearchOptions({...searchOptions,priceMin:v})}
                            options={["300,000","500,000","1,000,000","1,500,000","2,000,000","3,000,000+"]}
                            title={"Price Min"}            
                        />
                    </div>
                    <div className={"flex-column-item"}>
                        <Dropdown placeholder={"Price (Max)"} 
                                value={priceMax} 
                                onChange={v => setSearchOptions({...searchOptions,priceMax:v})}
                                options={["300,000","500,000","1,000,000","1,500,000","2,000,000","3,000,000+"]}
                                title={"Price Max"}            
                            />
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
