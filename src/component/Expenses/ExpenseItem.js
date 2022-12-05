import ExpenseDate from "./ExpenseDate";
//  import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css";
import React,{useState} from 'react';//required for older version of react

const ExpenseItem = (props) => {
  const [Title,setTitle]=useState(props.title);
  const[amount,setAmount]=useState(props.amount);


  const clickhandler=()=>
  {

    setTitle('updated');
  console.log(Title);
  }
  const DeleteExpense=()=>
  {

  console.log("Deleted");
  }
const changeExpense=()=>
{

  setAmount('100$');
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
        <h2>{Title}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>

    {/* <button onClick={clickhandler}>change title</button>
    <button onClick={DeleteExpense}>DeleteExpense</button> */}
    <button onClick={changeExpense}>ChangeExpense</button>
    </div>
  );
};
export default ExpenseItem;
