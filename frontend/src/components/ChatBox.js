import React from 'react';

function ChatBox({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
          <p><strong>{msg.sender}</strong>: {msg.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
