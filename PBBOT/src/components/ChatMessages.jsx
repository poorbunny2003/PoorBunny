import React from 'react';
import Message from './Message';


const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <Message 
          key={index} 
          content={msg.content} 
          isUser={msg.isUser} 
        />
      ))}
    </div>
  );
};

export default ChatMessages;