import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import ExamList from './pages/ExamList';
import Exam from './pages/Exam';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<ExamList />} />
            <Route path="/exam/:examId/mock/:mockId" element={<Exam />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
