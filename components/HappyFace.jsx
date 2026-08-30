import React from 'react'

export default function HappyFace() {
  return (
    <div className="card card-main">
      <div className="face">
        <span className="eye left"></span>
        <span className="eye right"></span>
        <span className="smile"></span>
      </div>
      <div className="mini-stats">
        <span>Happy</span>
        <strong>+88%</strong>
      </div>
    </div>
  )
}
