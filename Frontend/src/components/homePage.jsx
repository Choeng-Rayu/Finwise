import React, { useEffect, useState } from 'react';
import '../index.css';
import '../styles/homePage.css';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example fetch, replace URL with your backend endpoint
    fetch('http://localhost:3000/api/example')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
        {/* Example fetch result display */}
        <div style={{ marginTop: '2rem' }}>
          {loading && <p>Loading data...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {data && (
            <div>
              <h3>Fetched Data:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;