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
        <p>Welcome to the future of web development and Software Development.</p>
        <p>We are a team of experts in the field of web development who specialise in helping people achieve their dream jobs in tech .</p>
        <button>Button</button>
      </div>

      <div className = "Career Change">
        <h2>Career Change</h2>
        <p>We are constantly looking for talented individuals who want to make a difference in the tech industry.</p>
        <p>Join us and help shape the future of web development and software development.</p>
        <button>Button</button>

      </div>

      <div>
        <h2>What we specialise in</h2>
        <ul className="specialise">
          <li className="specialise" ><button>React</button></li>
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
          <li><button>Ruby</button></li>
          <li><button>C++ </button></li>
          <li><button>C </button></li>
        </ul>
      </div>

      <div className="expertise">
        <h2 styleType= "Arial"> WHY CHOOSE US </h2>
        <p> we find solutions where others seem to struggle.</p>
        <p>Our expertise, experience and commitment to quality make us a strong contender.</p>
      </div>


      <div className = "Machine Learning Course"> 
        <h2>Machine Learning Course</h2>
        <p>We offer a comprehensive machine learning course covering various topics such as 
        data preprocessing, model selection, and implementation in Python.</p>
        <button>Button</button>

      </div>
    </>
  );
}






export default App;
