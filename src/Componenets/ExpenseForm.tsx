import React from 'react'

const ExpenseForm = () => {
  return (
    <>
        <form action="">
    <div className="mb-3">
        <label htmlFor="description" className="form-label"> </label>
   <input id="description" type="text" className="form-control" />

   <label htmlFor="amount" className="form-label"></label>
   <input id="amount" type="number" className="form-control" />
    </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label"></label>
            <select name="" id="" className="form-select">
                <option value="">All categories</option>
                <option value="">Groceries</option>
                <option value="">Utilities</option>
                <option value="">Entertainment</option>
            </select>
            </div>

        </form>
    </>
  )
}

export default ExpenseForm;