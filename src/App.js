import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expense/Expense';


const App= () => {

  const onaddData = (eventdata) =>{
    const data ={
      ...eventdata,
    }
    console.log(data);
  }
  const expense = [
    {
      id: "101",
      name: "Krima",
      tech: "Frotend",
      com: "Ordex",
      date: new Date(2021, 7, 16),
    },
    {
      id: "102",
      name: "Ena",
      tech: "Backend",
      com: "Ordex",
      date: new Date(2021, 6, 17),
    },
    {
      id: "103",
      name: "PM",
      tech: "Angular",
      com: "Sapphire",
      date: new Date(2021, 9, 1),
    },
    {
      id: "104",
      name: "cartoon2",
      tech: "React",
      com: "Infolabz",
      date: new Date(2021, 8, 16),
    },
  ]

 return(
  <div>
    <NewExpense onadd={onaddData}></NewExpense>
    <Expense items={expense}></Expense>
    </div>
  )
 }

  /*ReactDOM.render(
    <>
      <Expense items={expense}></Expense>
    </>,
    document.getElementById('root'),
  );*/


export default App;
