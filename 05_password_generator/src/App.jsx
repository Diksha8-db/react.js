import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length,setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function(){
      let pass = ""
      let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
      
      if(numberAllowed) str += "0123456789"
      else if(charAllowed) str += "!@#$%^&+-/><|*()~"

      for(let i = 0; i< length; i++){
  
        let randomIndex = Math.floor(Math.random()* str.length);
        pass += str.charAt(randomIndex);

      }
   
      setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
     passwordRef.current?.select();

     //passwordRef.current?.setSelectionRange(start,end);

     window.navigator.clipboard.writeText(password);

},[password]);

  useEffect(()=>{
      passwordGenerator();
      
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <h1 className="text-center text-4xl mt-4 text-white mb-8">Password Generator</h1>
      <div className="bg-gray-700 rounded-xl w-100 h-30 text-orange-700 shadow-md m-auto">
       
       <div className="flex shadow rounded-lg overflow-hidden mb-4 p-3">
        <input type="text"  value={password} ref={passwordRef} placeholder="random password..." readOnly 
            className="outline-none w-full py-1 px-3 bg-white rounded-l-lg"
        />

        <button onClick={copyPasswordToClipboard} className="rounded-r-lg outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
       </div>

      <div className="flex text-sm gap-x-2 pl-4">

        <div className="flex items-center gap-x-1">
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"
           onChange={(e) => {setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={()=>{
              setNumberAllowed((prev) => !prev);
             }}
          />
          <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
             type="checkbox"
             defaultChecked={charAllowed}
             id="numberInput"
             onChange={()=>{
              setCharAllowed((prev) => !prev);
             }}
          />
          <label>Characters</label>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
