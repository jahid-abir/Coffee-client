import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee'
import { useState } from 'react'

function App() {
  const loadCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadCoffees)
  return (
    <>
      <h1 className='text-4xl'>simple coffee shop</h1>
      <div className='grid grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} coffee={coffee} setCoffees={setCoffees}></Coffee>)
      }
      </div>
    </>
  )
}

export default App
