import { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectYear) => {
        setFilteredYear(selectYear);
    }
    const filteredExpenses = props.items.filter(expense => {return expense.date.getFullYear().toString() === filteredYear})


    return (
      <>
        <Card className="expenses">
          <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </>
    );
}
export default Expenses




