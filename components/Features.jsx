import React from 'react'

export default function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'Expressive design',
      description: 'Bright colors and gentle motion create a cheerful experience.'
    },
    {
      icon: '⚡',
      title: 'Lightweight',
      description: 'Fast and simple setup built for quick experiments and creativity.'
    },
    {
      icon: '💡',
      title: 'Easy to extend',
      description: 'Use this starter as a base for landing pages, portfolios, or apps.'
    }
  ]

  return (
    <section id="features" className="features">
      {features.map((feature, index) => (
        <article key={index} className="feature">
          <span>{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}
