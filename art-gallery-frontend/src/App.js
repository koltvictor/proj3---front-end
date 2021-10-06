import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

//component imports
import Header from './components/Header'
import ArtList from './components/ArtList'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import ArtDetail from './components/ArtDetail';
import Appointment from './components/Appointment';
import AppointmentCard from './components/AppointmentCard'

function App() {
  const [searchArt, setSearchArt] = useState('')
  const [arts, setArts] = useState([])
  const [appointments,setAppointments] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/gallery')
    .then((r) => r.json())
    .then(setArts);
  }, [])

  function handleSearch(e) {
    setSearchArt(e.target.value);
  }

  const displayedArts = arts.filter(art => {
    return art.artist.toLowerCase().includes(searchArt.toLowerCase()) ||
    art.title.toLowerCase().includes(searchArt.toLowerCase())
  })

  function handleAddAppointment(newAppointment){
    const updatedAppointmentArray = [...appointments, newAppointment]
    setAppointments(updatedAppointmentArray)}

    const appointmentCards = appointments.map((appointment) => {
      return(
        <AppointmentCard key={appointment.id} appointment={appointment} />
      )
    })

  return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>  
        <Route exact path = "/gallery">
          <NavBar /> 
          <Search searchArt={searchArt} handleSearch={handleSearch}/>
          <ArtList arts={displayedArts}/> 
        </Route>
        <Route exact path = "/gallery/:id"  >
          <NavBar />
          <ArtDetail /> 
        </Route>
        <Route exact path = "/appointment" >
          <NavBar />
          <Appointment onAddAppointment={handleAddAppointment} />
          {appointmentCards}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
