import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
      title:"Insurance Car",
      date: new Date("1994-04-09"),
      price: 200
  },
  {
      title:"Internet",
      date: new Date("2018-04-09"),
      price: 100
  },
  {
      title:"Home Rent",
      date: new Date(),
      price: 552
  },
  {
      title:"Cellphone",
      date: new Date(),
      price: 58
  },

]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    // console.log('in app.js')
    // console.log(expense)
    setExpenses((prevExpense) => {
      console.log(expense)
      return [...prevExpense, expense];
    })
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
