import React from 'react'
import My_Navbar from '../navbar/My_Navbar'
import './About.css'
import '../../../dist/output.css'

function About() {
  return (
    <>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <div id="title" class='gird-about'>
      <header class="page-header absolute top-0 left-0 right-0 bg-black">
         <My_Navbar />
      </header>    
      <div class="page-main-about "> 
        <div class="c"> asd</div>
        <div className="c">asd </div>
        <div class="c">asd </div>
      </div>
      <footer class="page-footer-about c bg-black">
        <p>asdasd</p>
      </footer> 
    </div>
    </html>
    </>
  )
}

export default About