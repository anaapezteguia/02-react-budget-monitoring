import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const ExpensesList = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Expenses list</h2>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </div>
);

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpensesList;
