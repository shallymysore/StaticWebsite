import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <p>Our new website is launching soon!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Stay updated:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <button type="submit">Notify me</button>
      </form>
    </div>
  );
}

export default App;
