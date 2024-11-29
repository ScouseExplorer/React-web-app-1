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
      <div className= "intro">
        <h1 >DiG WEB</h1>
        <p>Welcome to the future of web development.</p>
        <p>We are a team of experts in the field of web development.</p>
        <button>Button</button>
      </div>

      <div>
        <h2>What we specialise in</h2>
        <ul className="specialise">
          <li><button>React</button></li>
          <li><button>Node.js</button></li>
          <li><button>JavaScript</button></li>
          <li><button>HTML</button></li>
          <li><button>CSS</button></li>
          <li><button>MongoDB</button></li>
          <li><button>Express.js</button></li>
          <li><button>Java</button></li>
          <li><button>Python</button></li>
          <li><button>PostgreSQL</button></li>
          <li><button>MySQL</button></li>
        </ul>
      </div>
    </>
  );
}

export default App;
