import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: new Date().toISOString()
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  // Button is disabled if either text or amount is empty
  const isButtonDisabled = text === '' || amount === '';

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative = expense, positive = income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn"
          style={{ backgroundColor: darkMode ? '#FFD700' : '#9c88ff' }}
          disabled={isButtonDisabled}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
