import ExpenseDate from "./ExpenseDate";
//  import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css";
// import React from 'react';//required for older version of react

const ExpenseItem = (props) => {
  const clickhandler=()=>
  {

  console.log("clicked");
  }
  const DeleteExpense=()=>
  {

  console.log("Deleted");
  }
  return (
    // older version jsx code
    //   return React.createElement(
    //     'div',
    //     {className:"expense-item"},
    //   React.createElement(ExpenseDate,{date:props.date}),
    //   React.createElement ('div',{},

    //  React.createElement('h1',{},'Expense 1'),
    //  React.createElement('h1',{},'Expense 1'))

    //   );

    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>

    <button onClick={clickhandler}>change title</button>
    <button onClick={DeleteExpense}>DeleteExpense</button>
    </div>
  );
};
export default ExpenseItem;
