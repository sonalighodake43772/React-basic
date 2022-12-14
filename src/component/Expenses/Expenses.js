import React, { useState } from "react";


import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // get data acoording to year
  const filteredExpense = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesChart expenses={filteredExpense}/>
        <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
