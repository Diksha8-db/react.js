import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  let username = 'Diksha Bharti'
  let myArr = [1,2,3,4];
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Hello Diksha!!</h1>
     
     <Card username={username} buttonText="Click me"></Card>
     <Card username="Deepa" ></Card>
    </>
  )
}

export default App
