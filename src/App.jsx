import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './signup.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <div className="header">
          <Link to="/" className="logo">DiG WEB</Link>
          <div className="header-right">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

function Body() {
  return (
    <>
      <div className="intro">
        <h1>DiG WEB</h1>
        <p>Welcome to the future of web development and Software Development.</p>
        <p>We are a team of experts in the field of web development who specialise in helping people achieve their dream jobs in tech.</p>
        <button>Learn More</button>
      </div>

      <div className="career-change">
        <h2>Career Change</h2>
        <p>We are constantly looking for talented individuals who want to make a difference in the tech industry.</p>
        <p>Join us and help shape the future of web development and software development.</p>
        <button>Join Now</button>
      </div>

      <div>
        <h2>What we specialise in</h2>
        <ul className="specialise">
          {[
            "React", "Node.js", "JavaScript", "HTML", "CSS", "MongoDB",
            "Express.js", "Java", "Python", "PostgreSQL", "MySQL", "Ruby", "C++", "C"
          ].map((tech) => (
            <li key={tech}>
              <button>{tech}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="expertise">
        <h2>WHY CHOOSE US</h2>
        <p>We find solutions where others seem to struggle.</p>
        <p>Our expertise, experience, and commitment to quality make us a strong contender.</p>
      </div>

      <div className="machine-learning-course">
        <h2>Machine Learning Course</h2>
        <p>We offer a comprehensive machine learning course covering various topics such as 
          data preprocessing, model selection, and implementation in Python.
        </p>
        <button>Enroll Now</button>
      </div>
    </>
  );
}

export default App;
