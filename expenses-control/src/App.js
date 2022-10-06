import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
