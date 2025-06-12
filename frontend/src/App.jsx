import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <main>
        <h2>Bienvenido a Kyosei Accesibilidad</h2>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </main>
    </Router>
  );
}

export default App;