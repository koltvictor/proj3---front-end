import React, {useState} from "react";

function Appointment() {

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
                body : JSON.stringify()
            })
            .then((r) => r.json())
            .then()
        }

  return(
      <div className="wrapper">
          <h2>Submission Application for Appointment</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={nameInput} onChange={setNameInput} />
            </label><br /><br />
            <label>
                Email:
                <input type="text" email="email" value={emailInput} onChange={setEmailInput}/>
            </label><br /><br />
            <label>
                Desired Date:
                <input type="date" date="date" value={dateInput} onChange={setDateInput}/>
            </label><br /><br />
            <label>
                Desired Time:
                <input type="time" time="time" value={timeInput} onChange={setTimeInput}/>
            </label><br /><br />
            <button type="submit">Request</button>
        </form>
      </div>
  )

}

export default Appointment;