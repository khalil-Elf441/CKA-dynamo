import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import Timer from '../components/Timer';

const Exam = () => {
  const { examId, mockId } = useParams();
  const [exam, setExam] = useState(null);
  const [showSolution, setShowSolution] = useState({});
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    fetch(`/exams/${examId}.json`)
      .then(response => response.json())
      .then(data => setExam(data));
  }, [examId]);

  const toggleSolution = (questionId) => {
    setShowSolution(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  if (!exam) {
    return <div>Loading...</div>;
  }

  const mock = exam.mocks.find(m => m.id === mockId);

  if (!mock) {
    return <div>Mock exam not found.</div>;
  }

  return (
    <div className="exam-view">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{exam.title} - {mock.title}</h2>
        <Timer initialTime={mock.duration} onTimeUp={handleTimeUp} />
      </div>
      {timeUp && <Alert variant="danger">Time's up!</Alert>}
      <hr />
      {mock.questions.map(q => (
        <div key={q.id} className="question">
          <h4>Question (Weight: {q.weight})</h4>
          <p>{q.statement}</p>
          <div className="terminal-container">
            <div className="terminal">
              {/* This is a simulated terminal. In a real app, this would be a component like xterm.js */}
              <p># Enter your commands here...</p>
            </div>
          </div>
          <Button variant="primary" onClick={() => toggleSolution(q.id)} className="mt-2">
            {showSolution[q.id] ? 'Hide Solution' : 'Show Solution'}
          </Button>
          {showSolution[q.id] && (
            <div className="solution mt-3">
              <h5>Solution:</h5>
              <pre><code>{q.solution}</code></pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Exam;
