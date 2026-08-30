import React, { useRef, useEffect, useState } from 'react'
import HappyFace from './HappyFace'
import FloatingNotes from './FloatingNotes'

export default function Hero() {
  const heroRef = useRef(null)
  const notesRef = useRef([])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      notesRef.current.forEach((note, index) => {
        if (!note) return
        const depth = (index + 1) * 8
        const dx = x * depth
        const dy = y * depth
        note.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    const handlePointerLeave = () => {
      notesRef.current.forEach((note) => {
        if (note) note.style.transform = 'translate(0, 0)'
      })
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('pointermove', handlePointerMove)
      hero.addEventListener('pointerleave', handlePointerLeave)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('pointermove', handlePointerMove)
        hero.removeEventListener('pointerleave', handlePointerLeave)
      }
    }
  }, [])

  return (
    <main className="hero" ref={heroRef}>
      <section className="hero-copy">
        <div className="pill">Smile. Breathe. Create joy.</div>
        <h1>Make your day a little brighter.</h1>
        <p>
          A playful web project with soft gradients, floating motion, and positive energy
          that makes the interface feel alive.
        </p>
        <div className="actions">
          <CTAButton />
          <a href="#features" className="secondary">See more</a>
        </div>
        <ul className="stats">
          <li><strong>24/7</strong><span>Good vibes</span></li>
          <li><strong>100%</strong><span>Playful</span></li>
          <li><strong>∞</strong><span>Smiles</span></li>
        </ul>
      </section>

      <section className="hero-visual" aria-label="Decorative illustration">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="sunburst"></div>
        <HappyFace />
        <FloatingNotes notesRef={notesRef} />
      </section>
    </main>
  )
}

function CTAButton() {
  const handleClick = () => {
    const burst = document.createElement('div')
    burst.className = 'burst-layer'

    const emojis = ['💖', '✨', '💛', '🌟']
    for (let i = 0; i < 16; i += 1) {
      const heart = document.createElement('span')
      heart.className = 'burst-heart'
      heart.textContent = emojis[i % 4]
      heart.style.left = '50%'
      heart.style.top = '50%'
      const angle = (360 / 16) * i
      const radius = 70 + (i % 4) * 18
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius
      heart.style.setProperty('--dx', `${x}px`)
      heart.style.setProperty('--dy', `${y}px`)
      heart.style.animationDelay = `${i * 0.03}s`
      burst.appendChild(heart)
    }

    document.body.appendChild(burst)

    setTimeout(() => {
      burst.remove()
    }, 900)
  }

  return (
    <button className="cta" onClick={handleClick}>
      Create joy
    </button>
  )
}
