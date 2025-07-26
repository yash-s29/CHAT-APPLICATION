import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const history = useHistory();
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      transports: ['websocket'],
    });

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        history.push('/');
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search, history]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const handleLogout = () => {
    socket.emit('disconnect');
    socket.off();
    history.push('/');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-left">
          <InfoBar room={room} onLogout={handleLogout} />
          <div className="chat-messages">
            <Messages messages={messages} name={name} />
          </div>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <div className="chat-right">
          <TextContainer users={users} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
