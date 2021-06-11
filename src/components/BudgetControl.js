import React from 'react';

const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: {budget}€</div>
      <div className="alert ">Remaining: {remaining}€</div>
    </>
  );
};

export default BudgetControl;
