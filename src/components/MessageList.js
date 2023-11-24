import React from "react";
import "./../styles/MessageList.css"; // Import CSS

const MessageList = ({ messages, currentUser }) => {
  return (
    <div>
      {messages.map((message, index) =>
        message.user === currentUser ? (
          <div className="right-div">
            <div className="right-side-chat">{message.text}</div>
            <div className="message-time-text">3.22 PM</div>
          </div>
        ) : (
            <div className="left-div">
                <div className="left-side-chat">{message.text}</div>
                <div className="message-time-text">3.22 PM</div>
            </div>
          
        )
      )}
    </div>
  );
};

export default MessageList;
