import React from 'react'

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">♥</span>
        <span>Animated Happiness</span>
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
