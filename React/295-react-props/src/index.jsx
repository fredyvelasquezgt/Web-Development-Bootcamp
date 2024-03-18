import React from "react";
import ReactDOM from "react-dom";

function Contact(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Contact
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Contact
      name="Fredy Velasquez"
      src="https://i.imgur.com/yXOvdOSs.jpg"
      tel="12345"
      email="fredy@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
