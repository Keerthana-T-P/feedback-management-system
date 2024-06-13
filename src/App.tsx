// frontend/src/App.tsx
import React from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Feedback Management System</h1>
      <div className="form-container">
        <FeedbackForm />
      </div>
      <FeedbackList />
    </div>
  );
};

export default App;
