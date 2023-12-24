import React, { useState } from 'react'
import './Thala.css'
import Validation from '../Validation'
import reason1 from '../Asset/reason1.jpeg'
const Thala = () => {
    const style={
        position:"relative",
        top:"242px",
        height:"140px",
        width:"180px",
        

    }
    const [values, setValues] = useState({
        name: ''
    })
    const [errors, setError] = useState({ name: "" })
    const handleSubmit = (event) => {
        event.preventDefault();

        setError(prev => ({ ...prev, name: Validation(values) }))
        // setError(Validation(values));
        //    setError(errors:)
    }


    const handlechange = (event) => {
        setValues(prev => ({ ...prev, name: event.target.value }))
    }


    return (
        <div className='main'>
            <div className="thala">
                <div className="content">
                    <h1>Behind Every<span>TH</span>ing there is  <span>A LA</span>w😍</h1>
                </div>
                <div className="container">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input type="text" placeholder="Enter Anything.." name="name" onChange={handlechange} />

                            <button type='submit' >Check</button>
                        </div>
                    </form>


                    {values.name === "" ? <div></div> : <div className='explanation'>{values.name} {errors.name && <span>{errors.name}</span>}
                    </div>}


                </div>

            </div>
           {errors.name=="=7 THALA for reason"?<div className='poster-image'><img src={reason1} alt="" style={style} /></div>:<div></div>}
        </div>
    )
}

export default Thala