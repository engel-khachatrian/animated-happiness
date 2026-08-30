import React from 'react'

export default function FloatingNotes({ notesRef }) {
  return (
    <>
      <div className="floating-note note-one" ref={(el) => { notesRef.current[0] = el }}>✨</div>
      <div className="floating-note note-two" ref={(el) => { notesRef.current[1] = el }}>💛</div>
      <div className="floating-note note-three" ref={(el) => { notesRef.current[2] = el }}>🌟</div>
    </>
  )
}
