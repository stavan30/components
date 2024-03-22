import React from 'react'
import { useState } from 'react'

const CounterPage = ({initialCount}) => {

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
  return (
    <div>
        <div className='p-4'>Count is {count}</div>
        <div className='flex gap-3'>
        <button className='px-3 py-1.5 border border-black' onClick={increment}>Increment</button>
        <button className='px-3 py-1.5 border border-black' onClick={decrement}>Decrement</button>
        </div>

        <form>
            <label>Add a lot!!</label>
        </form>
    </div>
  )
}

export default CounterPage