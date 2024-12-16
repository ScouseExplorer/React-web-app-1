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
      <div className="intro">
        <h1>DiG WEB</h1>
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
          <li><button>MySQL </button></li>
        </ul>
      </div>

      <div className="expertise">
        <h2> why choose us </h2>
        <p> we find solutions where others seem to struggle.</p>
        <p>Our expertise, experience and commitment to quality make us a strong contender.</p>
      </div>
    </>
  );
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
console.log(result.substring(0, result.length - 1))

export default App;
