import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  const [state, setState] = React.useState(0);
  const [input, setInput] = React.useState("");

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="App">
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
}

export default App;
