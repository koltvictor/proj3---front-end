import React, { useState, useEffect } from 'react';
import './App.css';

//component imports
import ArtList from './ArtList'
import NavBar from './NavBar'
import MyArt from './MyArt'

function App() {
  return (
    <div className="App">
      <ArtList /> 
      <NavBar /> 
      <MyArt /> 


    </div>
  );
}

export default App;
