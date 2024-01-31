import React, {useState} from 'react'
import Form from '../../components/Form/Form';

const ToDo = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);
  const [difference, setDifference] = useState(0);
  const [product, setProduct] = useState(0);
  const [quotient, setQuotient] = useState(0);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSum(Number(num1) + Number(num2))
    setDifference(Number(num1) - Number(num2))
    setProduct(Number(num1) * Number(num2))
    setQuotient(Number(num1) / Number(num2))
  }

  return (
    <div className='mb-5'>
      <Form 
        num1 = {num1}
        num2 = {num2}
        setNum1 = {setNum1}
        setNum2 = {setNum2}
        formSubmit = {handleFormSubmit}
      />
      <h2 className='text-center pt-5'>Result</h2>
      <h5 className='text-center '>{`Addition: ${sum}`}</h5>
      <h5 className='text-center '>{`Subtraction: ${difference}`}</h5>
      <h5 className='text-center '>{`Multiplication: ${product}`}</h5>
      <h5 className='text-center '>{`Division: ${quotient}`}</h5>
    </div>
  )
}

export default ToDo