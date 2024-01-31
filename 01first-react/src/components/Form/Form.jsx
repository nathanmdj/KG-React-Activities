import React from 'react'
import './form.css'
const Form = ({num1, num2, formSubmit, setNum1, setNum2}) => {
  return (
    <div className='d-flex justify-content-center'>
      <form className='border p-5 bg-body-tertiary '>
        <div className='mb-3 d-flex justify-content-between'>
          <label htmlFor="" className='flex-end'>Enter first number </label>
          <input 
            className='form-control w-50'
            type="text"
            value={num1}
            onChange={(e)=>setNum1(e.target.value)}
          />
        </div>
       
        <div className='d-flex justify-content-between'>
          <label htmlFor="" className='me-3'>Enter second number </label>
          <input 
            className='form-control w-50'
            type="text"
            value={num2}
            onChange={(e)=>setNum2(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center pt-5'>
          <button onClick={formSubmit}
          className='p-2 rounded-3 btn btn-success '>Calculate</button>
        </div>
        
      </form>
    </div>
  )
}

export default Form