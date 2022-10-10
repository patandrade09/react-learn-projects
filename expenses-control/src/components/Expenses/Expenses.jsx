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
                {}
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <ExpenseItem title={props.items[0].title} price={props.items[0].price} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} price={props.items[1].price} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} price={props.items[2].price} date={props.items[2].date}/>
                <ExpenseItem title={props.items[3].title} price={props.items[3].price} date={props.items[3].date}/>
            </Card>
        </>
    )
}
export default Expenses




