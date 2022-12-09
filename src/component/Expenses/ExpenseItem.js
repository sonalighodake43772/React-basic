import ExpenseDate from "./ExpenseDate";
import Card from '../UI/card';
//  import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css";
// import React,{useState} from 'react';//required for older version of react

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />

      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
      </div>
      <div className="expense-item__price">{props.data.amount}</div>

      {/* <button onClick={clickhandler}>change title</button>
    <button onClick={DeleteExpense}>DeleteExpense</button> 
  <button onClick={changeExpense}>ChangeExpense</button>*/}
      {/* // older version jsx code
    //   return React.createElement(
    //     'div',
    //     {className:"expense-item"},
    //   React.createElement(ExpenseDate,{date:props.date}),
    //   React.createElement ('div',{},

    //  React.createElement('h1',{},'Expense 1'),
    //  React.createElement('h1',{},'Expense 1'))

    //   ); */}
    </Card>
  );
};
export default ExpenseItem;
