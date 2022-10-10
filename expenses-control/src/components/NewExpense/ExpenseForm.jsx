import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeExpense = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeExpense = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeExpense = (event) => {
      setEnteredDate(event.target.value);
    };

    const expenses = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    const submitHandler = (event) => {
        event.preventDefault()
        setEnteredDate("")
        setEnteredAmount("")
        setEnteredTitle("")
        props.onSaveExpenseData(expenses)
    }
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeExpense} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={'0.01'}
              step={'0.01'}
                        onChange={amountChangeExpense}
                        value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeExpense} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}
export default ExpenseForm;