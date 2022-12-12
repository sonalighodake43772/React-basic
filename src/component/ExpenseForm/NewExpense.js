import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  const SaveExpenseDataHandler = (EnteredExpenseData) => {
    const expensedata = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    //    console.log(expensedata);
    props.onaddexpense(expensedata);
    SetIsEditing(false);
  };

  const StartEditingHandler = () => {
    SetIsEditing(true);
  };

  const StopEditingHandler = () => {
    SetIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={StartEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          OnSaveExpenseData={SaveExpenseDataHandler}
          OnCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
