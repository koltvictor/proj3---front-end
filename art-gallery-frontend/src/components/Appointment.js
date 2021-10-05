import React from "react";

function Appointment() {

    function handleSubmit(e) {
        alert('A request was submitted: ');
        e.preventDefault();
      }

  return(
      <div className="wrapper">
          <h2>Submission Application for Appointment</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" />
            </label><br /><br />
            <label>
                Email:
                <input type="text" email="email" />
            </label><br /><br />
            <label>
                Desired Date:
                <input type="date" date="date" />
            </label><br /><br />
            <label>
                Desired Time:
                <input type="time" time="time" />
            </label><br /><br />
            <button type="submit">Submit</button>
        </form>
      </div>
  )

}

export default Appointment;