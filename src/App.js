import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Chat1 from "./components/Chat1";
import Chat2 from "./components/Chat2";
import Chat3 from "./components/Chat3";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NotFoundPage from "./components/NotFoundPage";

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
    <>
      <div className="App">
        <Header />
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            id="outlined-basic"
            label="author"
            variant="outlined"
            onChange={(event) => setAuthor(event.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="text"
            variant="outlined"
            onChange={(event) => setMessageText(event.target.value)}
            style={{ margin: "20px 0" }}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            style={{ margin: "0 0 20px 0" }}
          >
            Add message
          </Button>
        </form>

        {messageList.map((message) => {
          return (
            <div key={message.id}>
              <p>
                {message.author} {message.messageText}
              </p>
            </div>
          );
        })}
      </div>

      <Routes>
        <Route path={"/components/chat1"} element={<Chat1 />}></Route>
        <Route path={"/components/chat2"} element={<Chat2 />}></Route>
        <Route path={"/components/chat3"} element={<Chat3 />}></Route>
        <Route path={"*"} element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
