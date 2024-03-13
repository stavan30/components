import React from 'react'
import Button from './Button'


const App = () => {
  return (
    <div>
        <div>
            <Button success rounded outline>Click Me</Button>
        </div>
        <div>
            <Button danger outline>Buy Now</Button>
        </div>
        <div>
            <Button warning>Alert</Button>
        </div>
        <div>
            <Button secondary outline>Sign Up</Button>
        </div>
        <div>
            <Button primary rounded>Stavan</Button>
        </div>
    </div>
  )
}

export default App