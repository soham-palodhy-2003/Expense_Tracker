import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Expense Tracker</h1>
      <p>
        Welcome to our Expense Tracker app! This application is designed to help you keep track of your daily expenses with ease. You can add expenses, view a list of all your expenses, and see the total amount spent.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add new expenses with a title and amount.</li>
        <li>View a list of all added expenses.</li>
        <li>See the total amount spent at a glance.</li>
      </ul>
      <h2>How to Use</h2>
      <ol>
        <li>Navigate to the "Add Expense" section to input your expenses.</li>
        <li>Fill in the title and amount for each expense and click "Add Expense".</li>
        <li>Check the "Expenses" section to see all your added expenses and the total amount.</li>
      </ol>
    </div>
  );
};

export default About;
