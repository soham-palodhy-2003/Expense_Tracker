import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    if (filter === 'income' && transaction.amount > 0) return true;
    if (filter === 'expense' && transaction.amount < 0) return true;
    return false;
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'amount') return b.amount - a.amount;
    return 0;
  });

  return (
    <>
      <h3>History</h3>
      <div className="filter-container">
        <label>Filter by:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="sort-container">
        <label>Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <ul className="list">
        {sortedTransactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
