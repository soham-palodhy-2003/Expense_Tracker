import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <h1 style={{ fontSize: 22, color: darkMode ? 'white' : 'black', textAlign: 'center' }}>Expense Tracker</h1>
  );
};

export default Header;
