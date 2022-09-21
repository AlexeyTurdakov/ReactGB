import logo from "./logo.svg";
import "./App.css";
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
    </div>
  );
}

export default App;
