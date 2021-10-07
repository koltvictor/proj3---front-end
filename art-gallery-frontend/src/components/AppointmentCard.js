import React from "react";

function AppointmentCard({appointment, deleteAppointment}) {

    const {id, email, date, time} = appointment

    console.log(appointment)


    return(
        <div className="appointmentCard"> 
            <h3>{id}</h3>
            <h4>{email}</h4>
            <h5>{date}</h5>
            <h5>{time}</h5>
            <button onClick={deleteAppointment}> Delete Request </button>
        </div>
    )
}

export default AppointmentCard;