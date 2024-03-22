import React from 'react'
import { useState } from 'react'

const CounterPage = ({initialCount}) => {

    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)

    function handleChange (event) {
        const value = parseInt(event.target.value) || 0

        setValueToAdd(value)
    }

    function handleSubmit (event) {
        event.preventDefault();
    }
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

        <form onSubmit={handleSubmit}>
            <label>Add a lot!!</label>
            <input
                value={valueToAdd || ""}
                type='number'
                className='p-1 m-3 bg-gray-300 border border-black'
                onChange={handleChange}
            />
            <button className='px-3 py-1.5 border-2 border-green-200 bg-green-950 text-white'>Add it!!</button>
        </form>
    </div>
  )
}

export default CounterPage