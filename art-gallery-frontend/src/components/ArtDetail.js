import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

function ArtDetail () {

    const [artShowing, setArtShowing] = useState([]);

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/gallery/${id}`)
        .then((r) => r.json())
        .then(setArtShowing)
    }, [id])

    return(
        <div>
            <img src={artShowing.image} alt={artShowing.title} />
            <h2>{artShowing.artist}</h2>
        </div>
    )
}

export default ArtDetail;