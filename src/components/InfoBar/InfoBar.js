import React from 'react';
import './InfoBar.css';
import onlineIcon from '../../icons/onlineIcon.png';
import logoutIcon from '../../icons/closeIcon.png';

function InfoBar({ room, onLogout }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online" />
        <h3 className="roomName">#{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <button className="logoutButton" onClick={onLogout} aria-label="Logout">
          <img src={logoutIcon} alt="Logout" />
        </button>
      </div>
    </div>
  );
}

export default InfoBar;
