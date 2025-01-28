import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    
    <Link to="home">Home</Link>   |
    <Link to="display">Display</Link>  |
    <Link to="insert">Insert</Link>   |
    <Link to="Search">Serch</Link>
    <main>
        <Outlet/>
    </main>
    
    
    </>
  )
}

export default Layout
