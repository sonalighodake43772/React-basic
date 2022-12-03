import ExpenseDate from './ExpenseDate';
 import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
// import React from 'react';//required for older version of react

const ExpenseItem=(props) =>{




  return(
    
  
  


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
      {/* <ExpenseDetails title={props.title} />
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} /> */}
      
      <ExpenseDetails amount={props.amount} />
      
      
      

      
    // </div>
  );
  
}
export default ExpenseItem;
