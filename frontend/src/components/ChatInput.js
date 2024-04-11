import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">Send</button>
      </div>
    </form>
  );
}

export default ChatInput;
