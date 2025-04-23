import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import './index.css';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { content: "Hi! I'm PoorBunny. How can I help you today?", isUser: false }
  ]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! How can I assist you today?";
    } else if (message.includes('how are you') || message.includes("how's it going")) {
      return "I'm just a program, so I don't have feelings, but thanks for asking! How about you?";
    } else if (message.includes('help') || message.includes('support')) {
      return "I can answer simple questions. Try asking me something!";
    } else if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Feel free to ask if you have other questions.";
    } else if (message.includes('goodbye') || message.includes('bye')) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm not sure I understand. Could you rephrase your question?";
    }
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    
    // Bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, { content: botResponse, isUser: false }]);
    }, 800);
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;