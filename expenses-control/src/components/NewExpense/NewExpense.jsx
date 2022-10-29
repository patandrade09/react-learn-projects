import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseUUID = uuidv4();
    const expenseData = {
        ...enteredExpenseData,
        id: expenseUUID
    }
    props.onAddExpense(expenseData)
    setIsEditing(false);
    

    

}
    return (
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}
export default NewExpense