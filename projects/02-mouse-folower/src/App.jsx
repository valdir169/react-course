import { useEffect, useState } from 'react'
// import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
     console.log("Efect", { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })

      console.log('HandleMOve', { clientX, clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    /* Clenup, se ejecuta cuando el componente  de desmonte
      --> cuando cambian las dependencias , antes de ejecutar el evento de nuevo
    */
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div >

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}



function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App



/* ,
package .json

"eslintConfig": {
  "extends": [
    "./node_modules/standard/eslintrc.json"
  ],
  "rules": {
    "react/prop-types": "enabled"
  }
} */