import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Link to='/Userdetails/1'>MyDetails</Link>
    </div>
  )
}
