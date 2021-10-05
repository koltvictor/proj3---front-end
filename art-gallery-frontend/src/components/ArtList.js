import React from 'react'
import ArtCard from './ArtCard'

function ArtList({arts}) {

    console.log(arts)

    return (
        <div className="cardsLayout">
            {arts.map((art) => {
                return (
                    <ArtCard 
                    art={art}
                    key={art.id}
                    />
                )
            })}
        </div>
    )
}

export default ArtList;
