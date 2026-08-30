import React from 'react'

export default function AboutSection() {
  const items = [
    {
      title: 'Joy-first UX',
      text: 'Every block is designed to feel warm, friendly, and easy to explore.',
    },
    {
      title: 'Motion with purpose',
      text: 'Animations guide attention without distracting from the content.',
    },
    {
      title: 'Scalable foundation',
      text: 'This starter is ready to grow into a portfolio, landing page, or product demo.',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <span className="section-kicker">Why this project</span>
        <h2>Built to feel alive and memorable.</h2>
      </div>

      <div className="about-grid">
        {items.map((item) => (
          <article key={item.title} className="info-card">
            <div className="card-icon">✦</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
