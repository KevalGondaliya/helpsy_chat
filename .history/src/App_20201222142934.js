import React, { useState, useRef } from "react";
import "./App.css";
import usrImg from "./assets/avatar.png";
import sendIcon from "./assets/send.png";
import TextComponent from "./components/TextComponent";
import backArrow from "./assets/left-arrow.png";

const App = () => {
  let loggedInUserId = 1;
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [messages, updateMessages] = useState([
    {
      message: "I wants to learn more about common cancer symptoms",
      createdAt: "2020-12-22T08:47:53.797Z",
      id: 1,
      userId: 1,
    },
    {
      message: "Message1",
      createdAt: "2020-12-22T08:48:53.797Z",
      id: 2,
      userId: 2,
    },
    {
      message: "Message2",
      createdAt: "2020-12-22T08:49:53.797Z",
      id: 3,
      userId: 2,
    },
    {
      message: "Message3",
      createdAt: "2020-12-22T08:50:53.797Z",
      id: 4,
      userId: 2,
    },
  ]);
  const onTypingMessage = (e) => {
    if (e.target.value !== "") {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };
  const addMessage = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="messaging">
          <div className="inbox_msg">
            <div className="mesgs">
              <div className="msg_history">
                <div className="headerStyle">
                  <div className="backBtn">
                    <img
                      src={backArrow}
                      alt="user image"
                      width="20px"
                      id="likeImg"
                    />
                  </div>
                  <div className="UImg">
                    <div className="avatarImg">
                      <img src={usrImg} alt="user image" width="45px" />
                    </div>
                  </div>
                  <h3 className="userName">Sanbot</h3>
                </div>
                <TextComponent
                  messages={messages}
                  loggedInUserId={loggedInUserId}
                />

                <div className="type_msg">
                  {isTyping ? (
                    <div className="typingTxt">
                      <p>typing...</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="input_msg_write">
                    <input
                      ref={inputRef}
                      type="text"
                      className="write_msg"
                      onChange={(e) => onTypingMessage(e)}
                      placeholder="Type a message here..."
                    />
                    <button
                      className="msg_send_btn"
                      onClick={addMessage}
                      type="button"
                    >
                      <img src={sendIcon} alt="send" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
