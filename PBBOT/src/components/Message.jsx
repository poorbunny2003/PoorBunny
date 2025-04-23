import React from 'react';


const Message = ({ content, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">{content}</div>
    </div>
  );
};

export default Message;