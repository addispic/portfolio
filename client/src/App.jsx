import React from 'react'
import {Routes,Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
// components
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-screen h-screen text-green-500 overflow-hidden'>
      {/* header */}
      <Header />
      {/* routes */}
      <Routes>
        {/* home */}
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App