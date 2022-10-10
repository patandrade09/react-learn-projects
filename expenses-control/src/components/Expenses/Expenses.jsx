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
    return (
        <>
            <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                {props.items.map((expense) => <ExpenseItem title={expense.title} price={expense.price} date={expense.date}/>)}
            </Card>
        </>
    )
}
export default Expenses




