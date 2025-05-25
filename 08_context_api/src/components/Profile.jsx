import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div>Please login </div>
        )
    }
    else{
        return(
            <>
            <h2 className="text-center text-4xl bg-orange-500">Welcome {user.username}</h2>
            </>
        )
    }
}

export default Profile