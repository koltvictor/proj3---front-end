import React from 'react'
import Search from './Search';


function NavBar({searchArt,handleSearch}) {
    return(
        <div className="navBar">
            <Search searchArt={searchArt} handleSearch={handleSearch} /> 
        </div>
    )
}

export default NavBar;

