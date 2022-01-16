import React, { useEffect } from "react";
import PropTypes from "prop-types";

const BudgetTracker = ({ budget, setBudget }) => {
  const handleInputBudget = (event) => {
    setBudget(event.target.value);
  };
  let budgetSubmit = false;
  useEffect(() => {}, []);

  if (budgetSubmit) {
    return <div>Your budget is {budget} </div>;
  }
  return (
    <div>
      <label className="budget-input" htmlFor="budget">
        Do you have a budget in mind?
        <input
          type="number"
          id="budget"
          name="budget"
          onChange={handleInputBudget}
          value={budget}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          budgetSubmit = true;
        }}
      >
        Set Budget
      </button>
    </div>
  );
};

export default BudgetTracker;

BudgetTracker.defaultProps = {
  budget: 0,
};

BudgetTracker.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func.isRequired,
};
