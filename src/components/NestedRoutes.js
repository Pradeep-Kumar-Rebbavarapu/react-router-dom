import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function NestedRoutes() {
  return (
    <div>
        <input type="search" placeholder="search"/>
      <div>
          <Link to="products">products</Link>
      </div>
      <div>
          <Link to="featuredproducts">Featured products</Link>
      </div>
    <Outlet/>
    </div>
  )
}
