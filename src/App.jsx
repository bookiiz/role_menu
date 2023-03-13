import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/Home'
import AppLayout from './components/layout/AppLayout'
import Entities from './pages/Entities'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/dataanalytics' element={<DataAnalytics />} /> */}
            <Route path='/entities' element={<Entities />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
