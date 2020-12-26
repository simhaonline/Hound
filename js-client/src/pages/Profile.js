import React from 'react'
import Image from "../images/user.png"
import '../CSS/profile.css'
function Profile() {
    
    return (
        <div class="row" id={"container-profile"}>
            <div className={"column"}>
                <img src={Image} id={"profile_image"}/>
            </div>
            <div className={"column"}>
                <div className={"table"} id={"profile_details"}>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Mr Timmy</th>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>Turner</td>

                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>Investor</td>

                        </tr>
                        <tr>
                            <td>Looking to</td>
                            <td>Buy</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={"row"}>
            <div className={"table"}>
                    <table>
                        <th>
                            Properties
                        </th>
                        <tr>
                            <td>Property 1</td>
                        </tr>
                        <tr>
                            <td>Property 2</td>
                        </tr>
                        <tr>
                            <td>Property 3</td>
                        </tr>
                        <tr>
                            <td>Property 4</td>
                        </tr>
                        <tr>
                            <td>Property 5</td>
                        </tr>

                        
                    </table>
                </div>
            </div>
      </div>
      
    )

}

export default Profile
