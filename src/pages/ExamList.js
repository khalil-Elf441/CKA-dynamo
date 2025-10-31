import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/exams/manifest.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setExams(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>CKA Mock Exams</h2>
      {exams.map(exam => (
        <div key={exam.id} className="exam-card">
          <h3>{exam.title}</h3>
          <div className="mock-list">
            {/* This part assumes a single mock per exam file, as per the new structure */}
            <Link to={`/exam/${exam.id}/mock/mock-1`}>
              Mock Exam 1
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamList;
