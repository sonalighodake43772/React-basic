import './ExpenseItem.css';
function ExpenseItem(props)
{

    
    return (
        <div className='expense-item'>
        <div>{props.data.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.data.title}</h2>
        </div>
        <div className='expense-item__description'>
            <h2>{props.data.LocationOfExpenditure}</h2>
        </div>
        <div className='expense-item__price'>{props.data.amount}</div>

       
        </div>
    );
}
export default ExpenseItem;