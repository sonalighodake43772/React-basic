import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enterdtitle, setEnteredtitle] = useState("");
  const [enterdAmount, setEnteredamount] = useState("");
  const [enterdDate, setEntereddate] = useState("");

  const ChangeTitle = (event) => {
    setEnteredtitle(event.target.value);
    // console.log('title chamnfe');
  };
  const ChangeAmount = (event) => {
    setEnteredamount(event.target.value); //event bject is used to target the value.
  };
  const ChangeDate = (event) => {
    setEntereddate(event.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterdtitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    console.log(expenseData);
  };

  //onchange is used when we enter something then it will print the changes.
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__controls ">
          <label>Title</label>
          <input type="text" onChange={ChangeTitle} />
          <br />
        </div>

        <div className="new-expense__controls ">
          <label>Amount</label>
          <input type="number" onChange={ChangeAmount} />
          <br />
        </div>
        <div className="new-expense__controls ">
          <label>Date</label>
          <input
            type="Date"
            min="01-01-2020"
            max="31-12-2023"
            onChange={ChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
