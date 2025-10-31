import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import Timer from '../components/Timer';
import { exams } from '../data/exams';

const Exam = () => {
  const { examId, mockId } = useParams();
  const [exam, setExam] = useState(null);
  const [showSolution, setShowSolution] = useState({});
  const [timeUp, setTimeUp] = useState(false);
  const [terminalInputs, setTerminalInputs] = useState({});

  useEffect(() => {
    setExam(exams[examId]);
  }, [examId]);

  const handleTerminalInputChange = (questionId, value) => {
    setTerminalInputs(prev => ({ ...prev, [questionId]: value }));
  };

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
            <textarea
              className="terminal"
              placeholder="# Enter your commands here..."
              value={terminalInputs[q.id] || ''}
              onChange={(e) => handleTerminalInputChange(q.id, e.target.value)}
            />
          </div>
          <Button variant="primary" onClick={() => toggleSolution(q.id)} className="mt-2">
            {showSolution[q.id] ? 'Hide Solution' : 'Hide Solution'}
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