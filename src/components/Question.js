import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  // define states
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // function that sets our budget
  const fixBudget = (ev) => {
    setAmount(parseInt(ev.target.value));
  };

  // submit to add the budget
  const addBudget = (ev) => {
    ev.preventDefault();

    // validation
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    // if validation is ok
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setShowQuestion(false);
  };

  return (
    <>
      <h2>What's your budget estimation?</h2>

      {error ? <Error message="Your budget is incorrect" /> : null}

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Write your estimation here"
          onChange={fixBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />
      </form>
    </>
  );
};
Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};
export default Question;
