import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const SaveExpenseDataHandler=(EnteredExpenseData)=>

    {
       const expensedata={
        ...EnteredExpenseData,
        id:Math.random().toString()
       };
    //    console.log(expensedata);
    props.onaddexpense(expensedata);
    }
  return (
    <div className="new-expense">
      <ExpenseForm OnSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
