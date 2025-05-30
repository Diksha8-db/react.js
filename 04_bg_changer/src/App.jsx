import { useState } from "react"

function App() {
  const [color,setColor] = useState();

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
          

      <div className="fixed flex flex-wrap jsutify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("red")} style={{backgroundColor : "red"}}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("green")}  style={{backgroundColor : "green"}}>Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("olive")} style={{backgroundColor : "olive"}}>Olive</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("gray")} style={{backgroundColor : "gray"}}>Gray</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("yellow")} style={{backgroundColor : "yellow"}}>Yellow</button>
        <button className="outline-none px-4 py-1 rounded-full text-brown shadow-lg" onClick={()=>setColor("pink")} style={{backgroundColor : "pink"}}>Pink</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("purple")} style={{backgroundColor : "purple"}}>Purple</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("lavender")} style={{backgroundColor : "lavender"}}>Lavender</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("white")} style={{backgroundColor : "white"}}>White</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("black")} style={{backgroundColor : "black"}}>Black</button>
      
        </div>
      </div>
      </div>
    </>
  )
}

export default App
