import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TypographyDemo } from './components/TypographyDemo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
    <TypographyDemo/>
    </div>
  )
}

export default App
