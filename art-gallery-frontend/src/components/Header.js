import React from "react";
import NavBar from "./NavBar";

function Header() {
    const headerName= "AMBIENT ART GALLERY"
    return (
        <>
            <div className="header">
                <h1>{headerName}</h1>
            </div>
            <NavBar />
        </>
    )
}

export default Header;