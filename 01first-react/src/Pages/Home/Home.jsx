import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div>
      <h1 className='text-center mb-5'>Home</h1>
      <Link to='/toDo'>
        <h3 className='text-center'>To Do App</h3>
      </Link>
    </div>
  )
}

export default Home