
import React,{useRef} from 'react'
import {Routes,Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'

// pages
// home
import Home from './pages/Home'

const App = () => {
  let bottomReference = useRef(null)

  const scrollHandler = () => {
    bottomReference?.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      {/* header */}
      <Header scrollHandler={scrollHandler}/>
      {/* pages */}
      <Routes>
        {/* home page */}
        <Route path='/' element={<Home bottomReference={bottomReference}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
