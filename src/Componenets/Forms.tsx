import { FormEvent, useRef, useState } from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema=z.object({
  description:z.string().min(3, {message:'Name must be atleast 3 characters.'}),
  category:z.string().min(3, {message:'Category Field is required.'}),
  amount:z.number( {invalid_type_error:'Age Filed is required.'}).min(0.01,{message: 'Age must be atleast 18.'})
})

type FormData =z.infer<typeof schema>;

const Forms = () => {

    const {register,handleSubmit, formState:{errors,isValid} }=useForm<FormData>({resolver:zodResolver(schema)});

const onSubmit =(data:any) => {console.log(data);  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className="mb-3">

        <label htmlFor="description" className="form-label">Description</label>

            <input {...register('description',{required:true, minLength:3})}
              id="name"
            type="text" 
            className="form-control" 
            style={{width:"200px"}} />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>

             <div className="mb-3">

        <label htmlFor="amount" className="form-label">Amount</label>

            <input  id="amount" {...register("amount", {valueAsNumber:true})}
             type="number" className="form-control" style={{width:"200px"}}/>

        <label htmlFor="category" className="form-label">Category</label>

            <input  id="category" {...register("category", {required:true})}
             type="text" className="form-control" style={{width:"200px"}}/>

              {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>





            <button disabled={!isValid} type='submit'  className='btn btn-primary'>Submit</button>
            </form>
    </>
  )
}

export default Forms;