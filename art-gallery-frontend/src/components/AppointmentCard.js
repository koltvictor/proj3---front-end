import React from "react";


function AppointmentCard({appointment, deleteAppointment}) {

    const {id, email, date, time} = appointment

    return(
        <div className="appointmentCard"> 
            <h3>{id}</h3>
            <h4>{email}</h4>
            <h5>{date}</h5>
            <h5>{time}</h5>
            <button onClick={event => deleteAppointment(id)}> Delete Request </button>
        </div>
    )
}

export default AppointmentCard;