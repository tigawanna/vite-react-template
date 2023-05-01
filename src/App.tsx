import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TypographyDemo } from './components/TypographyDemo'
import { CardDemo } from './components/CardDemo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex justify-center items-center">
      <CardDemo/>
    </div>
  )
}

export default App
