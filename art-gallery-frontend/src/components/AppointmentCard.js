import React, {useState} from "react";
import Appointment from "./Appointment";

function AppointmentCard({appointment}) {

    return(
        <div className="appointmentCard"> 
            <h3>{appointment.id}</h3>
            <h4>{appointment.email}</h4>
            <h5>{appointment.date}</h5>
            <h5>{appointment.time}</h5>
        </div>
    )
}

export default AppointmentCard;