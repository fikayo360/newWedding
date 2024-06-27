import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './pages/hero/hero'
import { Services } from './pages/services/services'
import { Works } from './pages/works/works'
import Testimonial from './pages/testimonials/testimonial'
import { Faq } from './pages/Faq/Faq'
import { Footer } from './pages/footer/footer'
import { Splash } from './pages/splash/splash'
import { About } from './pages/about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Splash/>
    <Hero />
    <About />
    <Services />
    <Works />
    <Testimonial />
    <Faq />
    <Footer />
    </>
  )
}

export default App
