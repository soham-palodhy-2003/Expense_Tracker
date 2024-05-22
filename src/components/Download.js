import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Download = ({ darkMode }) => {
  const { transactions } = useContext(GlobalContext);
  const isButtonDisabled = transactions.length === 0;

  const handleDownload = () => {
    const doc = new jsPDF();

    // Define the columns for the table
    const columns = ["Date", "Text", "Amount"];

    // Define the rows for the table
    const rows = transactions.map(tx => [
      new Date(tx.date).toLocaleDateString(),
      tx.text,
      `₹${tx.amount.toFixed(2)}`
    ]);

    // Add a title to the document
    doc.setFontSize(18);
    doc.text('Expense Tracker Report', 14, 22);

    // Add the table to the document
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 30,
      theme: 'striped', // 'striped', 'grid' or 'plain'
      styles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] }, // Default style
      headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] }, // Header row style
      alternateRowStyles: { fillColor: [240, 240, 240] } // Alternate row color
    });

    // Save the PDF
    doc.save('expenses.pdf');
  };

  return (
    <button
      className="btn"
      onClick={handleDownload}
      disabled={isButtonDisabled}
      style={{ backgroundColor: darkMode ? '#FFD700' : '#9c88ff' }}
    >
      Download Report
    </button>
  );
};

export default Download;
