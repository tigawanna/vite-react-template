import { useState } from 'react'
import { Link, Outlet } from '@tanstack/router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/profile">profile</Link>
        <Link to="/contact">Contact</Link>

      </div >
        <Outlet/>
    </div>
  )
}

export default App
