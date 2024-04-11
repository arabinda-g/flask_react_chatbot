import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  let navigate = useNavigate();

  const handleNewChat = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/create_token`);
      const token = response.data.token;
      navigate(`/chat/${token}`);
    } catch (error) {
      console.error('Failed to create new chat:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Chatbot</h1>
      <button onClick={handleNewChat}>New Chat</button>
    </div>
  );
}

export default HomePage;
