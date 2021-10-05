import React from 'react'
import {Link} from 'react-router-dom'

function ArtCard({art}) {

    const {id, artist, image, title} = art

    return(
        <div className="artCards"> 
            <img className="cardImg" key={id} src={image} alt={title} height="250" width="250" />
            <h3>{artist}</h3>
            <h4>{title}</h4>
            <Link to={`/gallery/${id}`}>More Details</Link>
        </div>
    )
}

export default ArtCard; 