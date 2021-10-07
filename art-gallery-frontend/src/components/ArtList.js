import React from 'react'
import ArtCard from './ArtCard'


function ArtList({arts}) {

    return (
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
    )
}

export default ArtList;
