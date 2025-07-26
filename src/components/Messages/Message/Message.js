// src/components/Message/Message.js
import React from 'react';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isOwnMessage = user.trim().toLowerCase() === trimmedName;

  return (
    <div className={`message-row ${isOwnMessage ? 'own' : 'other'}`}>
      {!isOwnMessage && (
        <div className="avatar">{user.charAt(0).toUpperCase()}</div>
      )}

      <div className={`message-bubble ${isOwnMessage ? 'own-bubble' : 'other-bubble'}`}>
        <div className="message-text">{text}</div>
        <div className="sender-name">{isOwnMessage ? 'You' : user}</div>
      </div>

      {isOwnMessage && (
        <div className="avatar">{trimmedName.charAt(0).toUpperCase()}</div>
      )}
    </div>
  );
};

export default Message;
