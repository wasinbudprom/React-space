import { useState } from 'react'
import './App.css'
import My_Navbar from './components/navbar/My_Navbar'
import '../dist/output.css'
import Footer from './components/footer/footer'
import First_Page from './components/home/first_page/First_Page.jsx'
import Second_Page from './components/home/second-page/Second_Page.jsx'
import Feature from './components/home/feature/Feature.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>


    <div id="title" class='gird '>
      <header class="page-header fixed top-0 left-0 right-0">
         <My_Navbar />
        </header>    
      <div class="page-main "> 
        <div class="c"><First_Page /></div>
        <div className="c"><Feature /></div>
        <div class="c"><Second_Page /></div>
      </div>
      <footer class="page-footer c bg-black">
        <Footer />
      </footer> 
    </div>

    </html>
    </>
  )
}

export default App
