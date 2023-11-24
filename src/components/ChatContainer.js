import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import "./../styles/ChatContainer.css"; // Import CSS

import full_exit from "../assets/fullscreen-exit-fill.png";
import arrow_left from "../assets/arrow-left-s-line.png";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const currentUser = "User123"; // Simulated current user

  useEffect(() => {
    // Simulated messages from an API call or WebSocket
    const initialMessages = [
      { text: "Hello!", user: "User123" },
      { text: "An employee loan is the amount of money sanctioned by the organization to help the employee in need. It is a form of financial assistance provided by the business to the employee. By lending the money to its employees, the organization lightens the financial burden on the employees.", user: "OtherUser" },
      { text: "Hello!", user: "User123" },
      { text: "Hi there!", user: "OtherUser" },
      { text: "Hello!", user: "User123" },
      { text: "An employee loan is the amount of money sanctioned by the organization to help the employee in need. It is a form of financial assistance provided by the business to the employee. By lending the money to its employees, the organization lightens the financial burden on the employees.!", user: "OtherUser" },
    ];
    setMessages(initialMessages);
  }, []);

  const sendMessage = (message) => {
    const newMessage = { text: message, user: currentUser };
    setMessages([...messages, newMessage]);
    // Simulated API call or WebSocket to send the message
  };

  return (
    <div className="chat-container">
      <div className="chat-container-head">
        <div className="chat-topic-text">
          <span>
            <img src={arrow_left} width={24} height={24}></img>
          </span>
          Personals loan policy 2023
        </div>
        <img src={full_exit} width={24} height={24}></img>
      </div>
      <div className="chat-container-body">
        <MessageList messages={messages} currentUser={currentUser} />
      </div>
      <div className="chat-container-footer">
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
