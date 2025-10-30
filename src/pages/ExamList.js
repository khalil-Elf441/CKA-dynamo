import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch('/exams/manifest.json')
      .then(response => response.json())
      .then(data => setExams(data));
  }, []);

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