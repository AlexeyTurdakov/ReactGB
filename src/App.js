import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import Message from "./components/Message.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

function App() {
  const mainPage = "main page";
  const message = "this is a message";
  const header = "this is a header";
  const body = "this is a body";
  const footer = "this is a footer";

  return (
    <div className="App">
      <h1>{mainPage}</h1>
      <Message message={message} />
      <Header header={header} />
      <Body body={body} />
      <Footer footer={footer} />
=======
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
>>>>>>> dev1
    </div>
  );
}

export default App;
