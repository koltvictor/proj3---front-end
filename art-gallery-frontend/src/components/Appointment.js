import React, {useState} from "react";

function Appointment({onAddAppointment}) {

    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [dateInput, setDateInput] = useState("")
    const [timeInput, setTimeInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:9292/appointment', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    userId: 1,
                    email:emailInput,
                    date:dateInput,
                    time:timeInput
                })
            })
        
            .then((r) => r.json())
            .then((newAppointment) => onAddAppointment(newAppointment))
        }

    return(
    <div className="wrapper">
        <h2>Submission Application for Appointment</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={nameInput} onChange={e => setNameInput(e.target.value)}/>
            </label><br /><br />
            <label>
                Email:
                <input type="text" email="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}/>
            </label><br /><br />
            <label>
                Desired Date:
                <input type="date" date="date" value={dateInput} onChange={e => setDateInput(e.target.value)}/>
            </label><br /><br />
            <label>
                Desired Time:
                <input type="time" time="time" value={timeInput} onChange={e => setTimeInput(e.target.value)}/>
            </label><br /><br />
            <button type="submit">Request</button>
        </form>
    </div>
)

}

export default Appointment;