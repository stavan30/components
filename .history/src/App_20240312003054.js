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
            <Button warning>See Deals</Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads</Button>
        </div>
        <div>
            <Button primary rounded>Stavan</Button>
        </div>
    </div>
  )
}

export default App