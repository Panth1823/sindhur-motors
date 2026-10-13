import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { useRoute } from './lib/router.js'
import IntroAnimation from './components/IntroAnimation/IntroAnimation.jsx'

export default function App() {
  const route = useRoute()
  const [showIntro, setShowIntro] = useState(true)

  const page =
    route === '/about' ? <About /> : route === '/contact' ? <Contact /> : <Home onReplayIntro={() => setShowIntro(true)} />

  return (
    <>
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      <header>
        <nav>
          <a href="#/">Home</a> | <a href="#/about">About</a> |{' '}
          <a href="#/contact">Contact</a>
        </nav>
        <button onClick={() => setShowIntro(true)}>Replay Intro</button>
      </header>

      <main>{page}</main>
    </>
  )
}
