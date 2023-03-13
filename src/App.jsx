import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Music from './pages/Music'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/musics' element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App