import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");

  const [colorButton, setColorButton] = React.useState("white");

  function handleClick() {
    setHeadingText("submitted");
  }

  function blackButton() {
    setColorButton("black");
  }

  function whiteButton() {
    setColorButton("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: colorButton }}
        onClick={handleClick}
        onMouseOver={blackButton}
        onMouseOut={whiteButton}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
