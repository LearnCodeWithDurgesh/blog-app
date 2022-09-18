import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import userContext from './userContext'
function UserProvider({children}) {

    const [user,setUser]=useState({
        name:'Durgesh'
    })
    useEffect(()=>{
        setUser({
            name:"Ankit Tiwari"
        })
    },[])

  return (
    
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>

  )
}

export default UserProvider