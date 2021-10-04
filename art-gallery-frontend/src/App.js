import React, { useState } from 'react';
import './App.css';

//component imports
import ArtList from './components/ArtList'
import NavBar from './components/NavBar'
import MyArt from './components/MyArt'

function App() {
  const [searchArt, setSearchArt] = useState('')

  function handleSearch(e) {
    setSearchArt(e.target.value);
  }

  return (
    <div className="App">
      <ArtList /> 
      <NavBar searchArt={searchArt} handleSearch={handleSearch} /> 
      <MyArt /> 
    </div>
  );
}

export default App;
