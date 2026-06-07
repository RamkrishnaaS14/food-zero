import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import Blog1Column from './pages/Blog1Column/Blog1Column'
import Blog2Columns from './pages/Blog2Columns/Blog2Columns'
import BlogSidebar from './pages/BlogSidebar/BlogSidebar'
import MainMenu from './pages/MainMenu/MainMenu'
import StarterMenu from './pages/StarterMenu/StarterMenu'
import DrinksMenu from './pages/DrinksMenu/DrinksMenu'

const OVERLAY_ROUTES = ['/about', '/contact', '/menu/main', '/menu/starter', '/menu/drinks', '/blog/1-column', '/blog/2-columns', '/blog/sidebar-post']

function AppLayout() {
  const { pathname } = useLocation()
  const isOverlay = OVERLAY_ROUTES.includes(pathname)

  return (
    <>
      <Header isOverlay={isOverlay} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog/1-column" element={<Blog1Column />} />
        <Route path="/blog/2-columns" element={<Blog2Columns />} />
        <Route path="/blog/sidebar-post" element={<BlogSidebar />} />
        <Route path="/menu/main" element={<MainMenu />} />
        <Route path="/menu/starter" element={<StarterMenu />} />
        <Route path="/menu/drinks" element={<DrinksMenu />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
