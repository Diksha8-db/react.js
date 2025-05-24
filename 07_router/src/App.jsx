import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

/* <a> tag is not used in React as it refreshes the whole page so we use <link> tag */


function App() {
  

  return (
    <>
      
      {/* <h1 className="text-center bg-orange-500 text-lg">Diksha Bharti</h1> */ }
      <Header/>
      <Home/>
      <Footer/>
    
    
    </>
  )
}

export default App
