import { useState } from 'react'
import ResumeBuilder from './ResumeBuilder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResumeBuilder/>
    </>
  )
}

export default App
