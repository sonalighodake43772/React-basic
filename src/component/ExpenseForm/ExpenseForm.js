import './ExpenseForm.css';
function ExpenseForm()
{
    const printtitle=(event)=>
    {
         console.log(event.target.value);
        // console.log('title chamnfe');
    }
    const printAmount=(event)=>
    {
        console.log(event.target.value);
    }
    const printDate=(event)=>
    {
        console.log(event.target.value);
    }

    return(
        <form>
        <div className='new-expense__controls '>
            <div className='new-expense__controls '>
            <label>Title</label>
            <input type="text" onChange={printtitle}/>
            </div>
            <div className='new-expense__controls '>
            <label>Amount</label>
            <input type="number" onChange={printAmount}/>
            </div>
            <div className='new-expense__controls '>
            <label>Date</label>
            <input type="Date" min='01-01-2020' max='31-12-2023' onChange={printDate}/>
            </div>

           
           
            
        </div>
        <div className='new-expense__actions '>
            
           <button type='submit'> Add Expense</button>
            </div>
        </form>
    
     
    );
}
export default ExpenseForm;