import React from "react";

function App() {
  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = React.useState(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
