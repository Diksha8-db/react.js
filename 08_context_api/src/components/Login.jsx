import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username, password})
    }


    return(
        <>
          <h1 className="text-center text-3xl bg-orange-500">Login</h1>
          <br/>
          <input 
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
          type="text" 
          placeholder="username"
          className="mr-2 border-black-500 p-1 border-2 rounded-full"/>
          
          <input 
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="password"
          className="border-black-500 p-1 border-2 rounded-full"/>

          <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login