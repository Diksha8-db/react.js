import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import conf from './conf/conf';
import { Header, Footer } from './components';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router';


function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentuser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <>
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400"> 
      <div className="w-full block">
         <Header/>
         <main>
        {/* <Outlet/> */}
         </main>
         <Footer/>
      </div>
    </div>
    </>
  ) : null
}

export default App









// NOTE:
// When app is created using Create-React-app the the env variables are stored as REACT_APP_[NAME] and accessed using process.env.[name of env variable]
