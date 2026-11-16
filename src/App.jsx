import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Manga from './Manga.jsx'
import JeuxVideos from './JeuxVideos.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/manga">Manga</Link> | {" "}
          <Link to="/jeux-videos">JeuxVideos</Link> | {" "}
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manga' element={<Manga />} />
          <Route path='/jeux-videos' element={<JeuxVideos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
