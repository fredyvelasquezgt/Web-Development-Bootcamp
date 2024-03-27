import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function updateFname(event) {
    const firstName = event.target.value;
    setFname(firstName);
  }

  function updateLname(event) {
    const lastName = event.target.value;
    setLname(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}{" "}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateFname}
          value={fname}
        />
        <input
          name="lName"
          onChange={updateLname}
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
