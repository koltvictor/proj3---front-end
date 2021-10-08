import React from 'react'
import ArtCard from './ArtCard'


function ArtList({arts}) {

    // function handleToggle {

    // }


    return (
        <div>
            <br />
            <input type="radio" value="inHouse"  name="purchased" />In-House
            <input type="radio" value="all" checked={true} name="purchased" />All
            <div className="cardsLayout">           
                {arts.map((art) => {
                    return (
                        <div>
                        <br />
                        <ArtCard 
                        art={art}
                        key={art.id}
                        />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArtList;

