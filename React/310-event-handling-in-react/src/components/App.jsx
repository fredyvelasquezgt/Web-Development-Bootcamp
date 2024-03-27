import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");

  function handleClick() {
    setHeadingText("submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
