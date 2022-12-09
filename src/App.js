import ExpenseItem from "./component/Expenses/ExpenseItem";
import NewExpense from "./component/ExpenseForm/NewExpense";
import Expenses from "./component/Expenses/Expenses";
import { useState } from "react";
// import React from 'react';

const old_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: "Electronics",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // display data dynamicalliy on ui
  const [expenses, setExpenses] = useState(old_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onaddexpense={addExpenseHandler} />
      {/* {expenses.map((item, i) => (
        <ExpenseItem data={item} />
      ))} */}
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
