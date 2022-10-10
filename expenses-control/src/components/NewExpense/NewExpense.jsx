import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { v4 as uuidv4 } from 'uuid';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
        let expenseUUID = uuidv4();
        const expenseData = {
            ... enteredExpenseData,
            id: expenseUUID
        }
        props.onAddExpense(expenseData)
    }
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
}
export default NewExpense