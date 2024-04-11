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
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the Chatbot</h1>
      <div className="d-flex justify-content-center">
        <button onClick={handleNewChat} className="btn btn-primary">New Chat</button>
      </div>
    </div>
  );
}

export default HomePage;
