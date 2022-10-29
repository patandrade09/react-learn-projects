import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {   
      id:"uuid1",
      title:"Insurance Car",
      date: new Date("2021-04-09"),
      price: 200
  },
  {   
      id:"uuid2",
      title:"Internet",
      date: new Date("2021-04-09"),
      price: 100
  },
  {    
      id:"uuid3",
      title:"Home Rent",
      date: new Date(),
      price: 552
  },
  {   
      id:"uuid4",
      title:"Cellphone",
      date: new Date(),
      price: 58
  },

]
function App() {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      console.log(expense)
      return [expense, ...prevExpense];
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
