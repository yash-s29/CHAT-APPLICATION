import React from 'react';
import './Input.css';

function Input({ message, setMessage, sendMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(e);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        aria-label="Type your message"
      />
      <button className="sendButton" type="submit" aria-label="Send message">
        ➤
      </button>
    </form>
  );
}

export default Input;
