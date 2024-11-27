import React from'react';
import './App.css';

function App() {
  return (
    // Wrap both elements inside a single parent div or React.Fragment
    <div>
      <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div>
      <h1>DiG WEB</h1>
      <p>Welcome to the future of web development.</p>
      <p>We are a team of experts in the field of web development.</p>
    </div>
  );
}

export default App;
