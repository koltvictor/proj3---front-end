import React from "react";

function Header() {
    const headerName= "NELSON MILOSCIA & ADAMS"
    return (
        <>
            <div className="header">
                <h1>{headerName}</h1>
            </div>
            <h2 className="header">Discover Art</h2>
        </>
    )
}

export default Header;