import { useState } from 'react'
import './App.css'

import Home1 from './Components/Home1'
import Nav1 from './Components/Nav1'
import About from './Components/About'




function App() {
  const [count, setCount] = useState(0)

  return (
     
    <>
{/* <Nav1/> */}
    {/* <Home1/> */}
    <About/>
  </>
  
    
  )
}

export default App
