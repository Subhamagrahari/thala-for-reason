import React, { useState } from 'react'
import './Thala.css'
import Validation from '../Validation'
const Thala = () => {
    const[values,setValues]=useState({
        name:''
    })
    const[errors,setError]=useState({})
    const handleSubmit=(event)=>{
        event.preventDefault();
        setError(Validation(values));
      
        }


        const handlechange=(event)=>{
            setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
        }


  return (
   <div className="thala">
    <div className="content">
    <h1>Behind Every<span>TH</span>ing there is <span>A LA</span>w😍</h1>
    </div>
    <div className="container">
        <form action="" onSubmit={handleSubmit}>
        <div className="inputs">
            <input type="text" placeholder="Enter Anything.." onChange={handlechange}/>
            <button type='submit'>Check</button>
        </div>
        </form>
      
        <div>
        
         {errors.name && <span>{errors.name}</span>}
        </div>
    </div>
   </div>
  )
}

export default Thala