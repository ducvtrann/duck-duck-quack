import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

import { Message } from '../Message/Message';

export const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, idx) => (
      <div key={idx}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);
