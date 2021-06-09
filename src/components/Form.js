import React, { useState } from 'react';

const Form = () => {
  return (
    <form>
      <h2>Write down your expenses</h2>
      <div className="campo">
        <label>Expense description</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Transportation"
        />
      </div>
      <div className="campo">
        <label>Expense amount</label>
        <input type="number" className="u-full-width" placeholder="E.g. 300" />
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
