import React, { useState } from 'react';
import Error from './Error';
const shortid = require('shortid');

const Form = ({ addNewExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [error, setError] = useState(false);

  // submit to add the expense
  const addExpense = (ev) => {
    ev.preventDefault();

    // validation, less than 0 or empty name field
    if (
      expenseAmount < 1 ||
      isNaN(expenseAmount) ||
      expenseName.trim() === ''
      //remember, trim() removes whitespace from both sides of a string
    ) {
      setError(true);
      return;
    }
    setError(false);

    // building the expense
    const expense = {
      expenseName,
      expenseAmount,
      id: shortid.generate(), // installing library with 'npm i shortid'
    };
    // pass the expense to main component
    addNewExpense(expense);

    // reset form
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Write down your expenses</h2>

      {error ? (
        <Error message="Either you left an empty field (they are both required) or your budget is incorrect" />
      ) : null}

      <div className="campo">
        <label>Expense description</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Transportation"
          value={expenseName}
          onChange={(ev) => setExpenseName(ev.target.value)}
        />
      </div>
      <div className="campo">
        <label>Expense amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="E.g. 300"
          value={expenseAmount}
          onChange={(ev) => setExpenseAmount(parseInt(ev.target.value, 10))}
          // we put 10 as a parameter here to indicate base 10 numerals in mathematical number systems
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};
export default Form;
