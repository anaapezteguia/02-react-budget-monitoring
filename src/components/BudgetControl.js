import React from 'react';
//we put keys here because it is not a default import
import { reviewBudget } from '../helpers';
import PropTypes from 'prop-types';

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

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};
export default BudgetControl;
