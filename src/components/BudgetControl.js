import React from 'react';
//we put keys here because it is not a default import
import { reviewBudget } from '../helpers';

const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: {budget}€</div>
      <div className={reviewBudget(budget, remaining)}>
        Remaining: {remaining}€
      </div>
    </>
  );
};

export default BudgetControl;
