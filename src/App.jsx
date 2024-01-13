import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './assets/Pages/HomePage'
import RoomPage from './assets/Pages/Room';
function App() {
   
  return (
    <> 
        <Router>
            <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/room/:roomId' element={<RoomPage/>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
