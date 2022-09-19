import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message.js";

function App() {
  const mainPage = "main page";
  const message = "this is a message";

  return (
    <div className="App">
      <h1>{mainPage}</h1>
      <Message message={message} />
    </div>
  );
}

export default App;
