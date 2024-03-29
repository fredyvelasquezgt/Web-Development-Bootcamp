import React, { useState } from "react";

function App() {
  const [fullName, setFullname] = useState({
    fname: "",
    lname: "",
  });

  function handleChange() {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullname((prevValue) => {
      if (inputName === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname,
        };
      } else if (inputName === "lName") {
        return {
          fname: prevValue.fname,
          lname: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          //value={fullName.fname}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          //value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
