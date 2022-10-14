import { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectYear) => {
        setFilteredYear(selectYear);
    }
    const filteredExpenses = props.items.filter(expense => {return expense.date.getFullYear().toString() === filteredYear})

    let expensesContent = <p style={{color:"white"}}>No expenses found.</p>

    if (filteredExpenses.length > 0){
        expensesContent =            
        filteredExpenses.map((expense) => 
        <ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        price={expense.price} 
        date={expense.date}/>
        )
    }
    return (
        <>
            <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            {expensesContent}
            </Card>
        </>
    )
}
export default Expenses




