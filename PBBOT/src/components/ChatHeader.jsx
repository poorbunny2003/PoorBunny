import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <h2>PoorBunny</h2>
      <div className="chat-bot-icon">
        <FontAwesomeIcon icon={faRobot} />
      </div>
    </div>
  );
};

export default ChatHeader;