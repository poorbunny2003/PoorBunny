// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, for styles
import ChatContainer from './components/ChatContainer';  // Importing your main chat container

ReactDOM.render(
  <React.StrictMode>
    <ChatContainer />  {/* Make sure ChatContainer is rendered */}
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches the id in your HTML
);
