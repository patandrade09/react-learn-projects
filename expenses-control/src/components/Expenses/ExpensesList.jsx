import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    
    if (props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                <p style={{ color: "white" }}>No expenses found.</p>
            </h2>
        )
    }
               
    return (
        <ul>
            <ul className="expenses-list">
                {props.items.map((expense) => 
                <ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                price={expense.price} 
                date={expense.date}/>
                )}
            </ul>
        </ul>
    )
}
export default ExpensesList