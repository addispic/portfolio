
import React from 'react'
import {Routes,Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'

// pages
// home
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      {/* header */}
      <Header />
      {/* pages */}
      <Routes>
        {/* home page */}
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
