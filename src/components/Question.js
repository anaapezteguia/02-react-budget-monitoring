import React, { useState } from 'react';

const Question = () => {
  // define state
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // function that sets our budget
  const fixBudget = (ev) => {
    setAmount(parseInt(ev.target.value));
  };

  // submit to add the budget
  const addBudget = (ev) => {
    ev.preventDefault();

    //   validation
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    //   if validation is ok
    setError(false);
  };

  return (
    <>
      <h2>What's your budget estimation?</h2>

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

export default Question;
