import { useEffect, useState } from 'react'

export const FollowMouse = ({ children }) => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enabled])

  return (
    <>
      {enabled && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#000',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '50px',
            pointerEvents: 'none'
          }}
        >
          {children}
        </div>
      )}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir mouse
      </button>
    </>
  )
}
