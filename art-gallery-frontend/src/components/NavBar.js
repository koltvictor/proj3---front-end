import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            <NavLink className="homeNav" exact to="/">Home</NavLink>
            <NavLink className="galleryNav" exact to="/gallery">Our Gallery</NavLink>
            <NavLink className="apptNav" exact to="/appointment">
            Make Appointment</NavLink>
            
        </nav>
    )
}












// import Search from './Search';



// function NavBar({searchArt,handleSearch}) {
//     return(
//         <div className="navBar">
            
//             <Search searchArt={searchArt} handleSearch={handleSearch} /> 
//         </div>
//     )
// }

export default NavBar;

