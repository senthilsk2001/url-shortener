import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import AboutPage from './component/AboutPage'
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
