import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessageList((prevState) => [
      ...prevState,
      {
        id: generateKey,
        author: author,
        messageText: messageText,
      },
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      botAnswer();
    }, 1000);
  }, [messageList]);

  function generateKey(arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 0;
  }

  function botAnswer() {
    const authorAnswer = messageList[messageList.length - 1];

    if (authorAnswer && authorAnswer.author) {
      setMessageList((prevState) => [
        ...prevState,
        {
          id: generateKey(prevState),
          messageText: `bot answer: ${authorAnswer.author} - message shipped`,
        },
      ]);
    }
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <br />
        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="author"
        />
        <br />
        <input
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          placeholder="text"
        />
        <br />
        <button type="submit">Add message</button>
      </form>

      {messageList.map((message) => {
        return (
          <div>
            <p>
              {message.author} {message.messageText}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
