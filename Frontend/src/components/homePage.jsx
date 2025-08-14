import React from 'react';
<<<<<<< HEAD:Frontend/src/components/homePage.jsx
import '../styles/homePage.css';
=======
import '../index.css';
>>>>>>> f290492c895fcbaf5ec6917f255c0aa549c5ca7d:Frontend/src/component/homePage.jsx

const HomePage = () => {
  return (
    <div className="finwise-container">
      <nav className="navbar">
        <div className="navbar-logo">Finwise</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="/BudgetPlan">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header>
        <h1 className="welcome">Welcome to Finwise</h1>
      </header>
      <main>
        <p className="text-amber-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="divider"></div>
        <div className="action-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Sign In</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;