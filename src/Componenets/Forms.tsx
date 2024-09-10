import React from 'react';

const Forms = () => {

  return (
    <>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
            <input id="name" type="text" className="form-control" style={{width:"200px"}} />
            </div>
             <div className="mb-3">
        <label htmlFor="age" className="form-label">Age:</label>
            <input id="age" type="number" className="form-control" style={{width:"200px"}}/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
    
    </>
  )
}

export default Forms;