import React, { useState } from 'react';
import './../styles/SendMessageForm.css'; // Import CSS
import send from "../assets/Frame 5172.png";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="send-message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">
        <img src={send} width={31} height={31}></img>
      </button>
    </form>
  );
};

export default SendMessageForm;
