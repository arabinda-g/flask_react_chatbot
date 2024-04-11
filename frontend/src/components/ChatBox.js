import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className="mb-3">
      {messages.map((msg, index) => (
        <div key={index} className={`d-flex justify-content-${msg.sender === 'User' ? 'end' : 'start'}`}>
          <div className={`card text-white bg-${msg.sender === 'User' ? 'primary' : 'secondary'} mb-3`}>
            <div className="card-body">
              <p className="card-text">{msg.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
