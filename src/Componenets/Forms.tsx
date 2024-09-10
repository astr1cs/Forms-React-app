import { FormEvent, useRef, useState } from "react";
import {useForm} from "react-hook-form";

const Forms = () => {

    const {register,handleSubmit}=useForm();

const onSubmit =(data:any) => {console.log(data);  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
            <input {...register('name')}
              id="name"
            type="text" 
            className="form-control" 
            style={{width:"200px"}} />
            </div>
             <div className="mb-3">
        <label htmlFor="age" className="form-label">Age:</label>
            <input  id="age" {...register("age")}
             type="number" className="form-control" style={{width:"200px"}}/>
            </div>
            <button type='submit'  className='btn btn-primary'>Submit</button>
            </form>
    </>
  )
}

export default Forms;