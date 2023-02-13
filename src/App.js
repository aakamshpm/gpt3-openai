import React from 'react'
import './App.css'
import './index.css'

import { CTA, Navbar, Brand } from './components'
import { Footer, Blog, Possibility, Header, WhatGPT3, Features } from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App