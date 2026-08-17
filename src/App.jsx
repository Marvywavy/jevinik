import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact  from './pages/Contact'
import RefreshToHome from './components/RefreshToHome'
import Article from './pages/Article'


function App() {
  return (
    <>
      <RefreshToHome />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Route>

        <Route path="/article" element={<Article />} />
      </Routes>
    </>
    
  )
}

export default App
