import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
