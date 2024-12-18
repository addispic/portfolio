
import React from 'react'
import {Routes,Route} from "react-router-dom"

// pages
import Home from './pages/Home'

const App = () => {
  let bottomReference = useRef(null)

  const scrollHandler = () => {
    bottomReference?.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
