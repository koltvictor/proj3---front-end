import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

function ArtDetail () {

    const [artShowing, setArtShowing] = useState()
    
    const id = useParams().id;

    // useEffect(() => {
    //     fetch(`http://localhost:9292/gallery/${id}`)
    //     .then((r) => r.json())
    //     .then(setArtShowing);
    //   }, [id])

      const { image, title, artist } = artShowing;

    return(
        <div>
            <img src={image} alt={title} />
            <h2>{artist}</h2>
        </div>
    )
}

export default ArtDetail;