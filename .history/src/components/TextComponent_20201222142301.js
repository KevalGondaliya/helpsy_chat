import React, { useState } from "react";
import "./../App.css";
import useLongPress from "./useLongPress";
import like from "./../assets/like.png";
import dislike from "./../assets/dislike.png";
import Modal from "./../components/Modal";
import IncommingMessage from "./../components/IncomingMessage";

const TextComponent = ({ messages, loggedInUserId }) => {
  const [longPress, setLongPress] = useState(false);
  const [modal, setModal] = useState(false);

  const onLongPress = () => {
    setLongPress(true);
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const onLike = () => {
    setLongPress(false);
  };

  const modalOpen = () => {
    console.log("open");
    setModal(true);
  };

  const modalClose = () => {
    console.log("close", modal);
    setModal(false);
  };
  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <div className="mesgs">
          <div className="msg_history">
            <div className="lableDayWise">
              <p>Yesterday</p>
            </div>
            {messages &&
              messages.map((message) => {
                return message.userId === loggedInUserId ? (
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>{message.message}</p>
                    </div>
                    <span className="time_date_out">
                      {moment(message.createdAt).format("hh:mm a")}
                    </span>
                  </div>
                ) : (
                  <div className="incoming_msg">
                    <div className="received_msg">
                      <div className="received_withd_msg" {...longPressEvent}>
                        <p>{message.message}</p>
                      </div>
                      {longPress && (
                        <div className="likesBtn" onClick={onLike}>
                          <img
                            src={like}
                            alt="user image"
                            width="20px"
                            id="likeImg"
                          />
                          <img src={dislike} alt="user image" width="20px" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
