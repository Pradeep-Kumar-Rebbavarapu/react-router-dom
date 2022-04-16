import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
export default function Login() {
    let {login,user} = useContext(Context)
    let navigate = useNavigate()
    let [username,setusername] = useState('')


    let handlelogin = () =>{
        login(username)
        navigate('/')
    }
  return (
    <div>
      <label>
          Username:(' ')
          <input type="text" onChange={e=>setusername(e.target.value)}/>
          <button type="submit" onClick={handlelogin}>Login</button>
      </label>
    </div>
  )
}
