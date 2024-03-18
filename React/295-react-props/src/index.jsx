import React from "react";
import contacts from "../contacts.js";

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.src} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Contact
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
