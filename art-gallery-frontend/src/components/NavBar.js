import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            <NavLink className="homeNav" exact to="/">Home</NavLink>
            <NavLink className="galleryNav" to="/gallery">Our Gallery</NavLink>
            <NavLink className="apptNav" to="/appointments">
            Make Appointment</NavLink>
            <NavLink className="detailsNav" to="/gallery/:id"></NavLink>
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

