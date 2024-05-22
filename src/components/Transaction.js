import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const formattedDate = new Date(transaction.date).toLocaleDateString(); // Format the date

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span>{transaction.text}</span>
      <span>{sign} ₹{Math.abs(transaction.amount)}</span>
      <span>{formattedDate}</span> {/* Display formatted date */}
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};
