import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Expenses</h2>;
  }
  
  if (props.items.length === 1) {
    return (
      <ul>
        {props.items.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        <h3 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h3>
        ;
      </ul>
    );
  }

  return (
    <ul className="expenses_list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
