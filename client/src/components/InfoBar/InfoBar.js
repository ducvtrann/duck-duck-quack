import React from 'react';
import { FaRegSmile, FaHandPeace } from 'react-icons/fa';
import './InfoBar.css';

export const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <FaRegSmile className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <FaHandPeace className="cyaIcon" />
        </a>
      </div>
    </div>
  );
};
