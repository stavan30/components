import React from "react"
import Dropdown from "./components/Dropdown"
import { useState } from "react"

const App = () => {

    const [selection, setSelection] = useState(null)
    
    const handleSelect = (option)=>{
        setSelection(option)
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]

  return (
    <div>
        <Dropdown value={selection} onChange={handleSelect} options={options}/>
    </div>
  )
}

export default App