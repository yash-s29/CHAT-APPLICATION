import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => {
  return (
    <div className="textContainer">
      <div className="infoSection">
        <h1>
          Join - The Realtime Chat Application <span role="img" aria-label="chat">💬</span>
        </h1>
        <h2>
          Built with React, Node.js, Express & Socket.IO <span role="img" aria-label="love"></span>
        </h2>
        <h2>
          Jump in and start chatting! <span role="img" aria-label="arrow">⬅️</span>
        </h2>
      </div>

      {Array.isArray(users) && users.length > 0 ? (
        <div className="usersSection">
          <h2>People currently chatting:</h2>
          <div className="activeContainer">
            {users.map(({ name }, index) => (
              <div key={`${name}-${index}`} className="activeItem">
                <span>{name}</span>
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="usersSection">
          <h3>No users currently online.</h3>
        </div>
      )}
    </div>
  );
};

export default TextContainer;
