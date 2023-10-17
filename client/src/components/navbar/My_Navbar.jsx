import React from 'react'
import './my_navbar.css'
import '../../../dist/output.css'
import '../About/About.jsx'


function My_Navbar() {
  
  return (
  <>
    <div class="nav-display nav-font ">
      <a href="" class="logo">LOGO</a>

        <nav class="">
          <ul class="flex items-stretch nav-style ">
            <li><a href="/">HOME</a></li>
            <li><a href="About">ABOUT</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </nav>

        <ul class="nav-style">
          <li><a href="">LOGIN</a></li>
        </ul>
    </div>
  </>
  )
}

export default My_Navbar