import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';
import axios from 'axios';

function ChatPage() {
  const { token } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/get_history/${token}`);
        let mergedMessages = response.data.history.flatMap(h => [
            { sender: 'User', message: h.prompt },
            { sender: 'Bot', message: h.response },
        ]);
        
        setMessages(mergedMessages);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };
    fetchHistory();
  }, [token]);

  const handleSendMessage = async (message) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/chat`, { token, prompt: message });
      const newMessage = { sender: 'User', message };
      const newResponse = { sender: 'Bot', message: response.data.response };
      setMessages([...messages, newMessage, newResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container mt-5">
      <ChatBox messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatPage;
