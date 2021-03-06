import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'

function ArtDetail () {

    const [artShowing, setArtShowing] = useState([]);

    const id = useParams().id;
    let history = useHistory();

    function handleClick() {
      history.push("/gallery");
    }

    useEffect(() => {
        fetch(`http://localhost:9292/gallery/${id}`)
        .then((r) => r.json())
        .then(setArtShowing)
    }, [id])

    return(
        <div>
            <br /><br /><br /><br />
            <img height="500" width="500" src={artShowing.image} alt={artShowing.title} />
            <h2 className="detailsArtist">{artShowing.artist}</h2>
            <h2 className="detailsTitle">Title: {artShowing.title}</h2>
            <div className="detailsText">
            <h3>Medium: {artShowing.medium}</h3>
            <h3>Date of Creation: {artShowing.creation_date}</h3>
            <h3>Number: {artShowing.number_of}</h3><br /><br />
            <button className="goback" type="button" onClick={handleClick}>
                Back To Gallery
            </button><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default ArtDetail;