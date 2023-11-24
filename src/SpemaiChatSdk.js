import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import chat_icon from '../src/assets/Frame 5182.png'
import chat_close_icon from '../src/assets/Group 3178.png'


function SpemaiChatSdk() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="chat-popup">
      <div className='icon-set'>
      {!isOpen && (
      <img src={chat_icon} className='chat-icon'  onClick={toggleChat}></img>
      )}
      {isOpen && (
        // <button className="chat-icon" onClick={toggleChat}>
        //   Chat
        // </button>
        <img src={chat_close_icon} className='chat-close-icon'  onClick={toggleChat}></img>
      )}
      </div>
     
      {isOpen && (
        <div className="chat-window">
          <ChatContainer />
          
        </div>
      )}
    </div>
  );
}

export default SpemaiChatSdk;
