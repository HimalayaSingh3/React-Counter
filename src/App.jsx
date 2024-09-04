import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment=()=>{
    setCount(count+1);
  }
  const Decrement=()=>{
    if(count===0) return;
    setCount(count-1);
  }

  return (
    <>
      <div className='flex flex-col justify-center h-80 w-80 gap-16 bg-green-500'>
        <div>
          <h1 className='text-3xl font-bold'>React Counter</h1>
        </div>
        <div>
          <h1 className='text-6xl'>{count}</h1>
        </div>
        <div className='w-full flex justify-center gap-10'>
          <button className='bg-blue-700 px-4 py-2 cursor-pointer' onClick={Increment}>Increment</button>
          <button className='bg-red-700 px-4 py-2 cursor-pointer' onClick={Decrement}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
