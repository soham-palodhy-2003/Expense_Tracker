import React, { useState } from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Download from './components/Download';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <GlobalProvider>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Header darkMode={darkMode} />
        <div className="container">
          <Balance darkMode={darkMode} />
          <IncomeExpenses darkMode={darkMode} />
          <TransactionList darkMode={darkMode} />
          <AddTransaction darkMode={darkMode} />
          <Download darkMode={darkMode} />
        </div>
        <div className="dark-mode-switch">
          <label className="form-check-label" htmlFor="darkModeSwitch" style={{ color: darkMode ? 'white' : 'black', marginRight: '10px' }}>Dark Mode</label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
