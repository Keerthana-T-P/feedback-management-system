// frontend/src/components/FeedbackList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
  timestamp: number;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/feedback');
      setFeedbacks(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul className="feedback-list">
      {feedbacks.map((fb, index) => (
        <li key={index}>
          <p><strong>{fb.name}</strong> ({new Date(fb.timestamp).toLocaleString()}): {fb.feedback}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
