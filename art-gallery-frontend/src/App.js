import React, { useState, useEffect } from 'react';
import './App.css';

//component imports
import Header from './components/Header'
import ArtList from './components/ArtList'
import NavBar from './components/NavBar'
import MyArt from './components/MyArt'

function App() {
  const [searchArt, setSearchArt] = useState('')
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292')
    .then((r) => r.json())
    .then(setArts);
  }, [])

  console.log(arts)

  function handleSearch(e) {
    setSearchArt(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <ArtList arts={arts}/> 
      <NavBar searchArt={searchArt} handleSearch={handleSearch} /> 
      <MyArt /> 
    </div>
  );
}

export default App;
