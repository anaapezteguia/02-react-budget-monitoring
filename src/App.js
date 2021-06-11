import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpensesList from './components/ExpensesList';
import BudgetControl from './components/BudgetControl';

function App() {
  // define money states
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [charge, setCharge] = useState({});
  const [addExpense, setAddExpense] = useState(false);

  // useEffect for updating remaining
  useEffect(() => {
    if (addExpense) {
      // adds expense
      setExpenses([...expenses, charge]);

      // subtracts from budget
      const remainingBudget = remaining - charge.expenseAmount;
      setRemaining(remainingBudget);

      // reset to false
      setAddExpense(false);
    }
  }, [addExpense, charge, expenses, remaining]); //dependencies

  // when adding new expense
  // const addNewExpense = (expense) => {
  //   setExpenses([...expenses, expense]);
  // };

  return (
    <div className="container">
      <header>
        <h1>Budget monitoring app</h1>
        <div className="contenido-principal contenido">
          {/* conditional component loading here:
           only if we set a budget our component appears
          */}
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setCharge} setAddExpense={setAddExpense} />
              </div>
              <div className="one-half column">
                <ExpensesList expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
