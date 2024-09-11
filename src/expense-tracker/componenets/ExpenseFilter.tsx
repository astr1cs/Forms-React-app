
import categories from '../categories';
interface Props{
    onSelectCategory:(category:string)=>void;
}
const ExpenseFilter = ({onSelectCategory}:Props) => {
 
    
    
  return (
   <select name="" id="" className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
    <option value="">All Categories</option>
    
    {categories.map((e)=><option key={e} value={e}>{e}</option>)}
   </select>
  )
}

export default ExpenseFilter;