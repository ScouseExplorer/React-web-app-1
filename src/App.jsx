import React from'react';
import './App.css';

function App() {
  return (
    
    <div>
      <div className="header">
        <a href="#default" className="logo">DiG WEB</a>
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
    <>
     <div>
      <h1>DiG WEB</h1>
      <p>Welcome to the future of web development.</p>
      <p>We are a team of experts in the field of web development.</p>
      <button> Button </button>
    </div>

    <div> 
      <h2> what we specialise in </h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Java</li>
        <li>Python</li>
        <li>Postgresql</li>
        <li> MySQL</li>
      </ul>
    </div>
    </>
   
  );
}

export default App;
