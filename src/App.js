import { Routes,Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Soundbar from './components/Soundbar'
import './App.scss'
import Par_main from './components/About/Par_main'

function App() {
  return (
    <>
      <Soundbar  />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<Par_main />} />
          <Route path='/Skills' element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
