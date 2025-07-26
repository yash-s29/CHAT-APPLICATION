import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import { FaUser, FaDoorOpen } from 'react-icons/fa';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="header">
        <h1>CHAT APPLICATION</h1>
        <h4>Meet new people</h4>
        <h2>Socialise</h2>
      </div>

      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>

        <div className="inputContainer">
          <FaUser className="inputIcon" />
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="inputContainer">
          <FaDoorOpen className="inputIcon" />
          <input
            placeholder="Room"
            className="joinInput"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            required
          />
        </div>

        <Link
          onClick={(event) => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
