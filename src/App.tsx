import { useState } from "react";

import ExpenseList from "./expense-tracker/componenets/ExpenseList";
import ExpenseFilter from "./expense-tracker/componenets/ExpenseFilter";
import ExpenseForm from "./expense-tracker/componenets/ExpenseForm";




const App = () => {

  const [selectedCategory,setSelectedCategory] =useState('');

 const [expenses,setExpenses] =useState(
[
    {id:1,description:"aaa",amount:10, category:"Utilities"},
    {id:2,description:"bbbb",amount:10, category:"Utilities"},
    {id:3,description:"cccc",amount:10, category:"Utilities"},
    {id:4,description:"addda",amount:10, category:"Utilities"}
  ]);
  const visibleExpenses=selectedCategory ? expenses.filter((e)=>e.category===selectedCategory) : expenses 
  return (
    <div>
      <div className="mb-5">
      <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense, id: expenses.length+1}])} />
        </div>
      <div className="mb-3">
    <ExpenseFilter onSelectCategory={(cat)=>setSelectedCategory(cat)}/> 

      </div>
    <ExpenseList expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id!==id))} /> 
    </div>


  )
}

export default App;