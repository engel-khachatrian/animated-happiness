import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import AboutSection from './components/AboutSection'
import './App.css'

export default function App() {
  return (
    <>
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>

      <Header />
      <Hero />
      <Features />
      <AboutSection />
    </>
  )
}
