import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
