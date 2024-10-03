import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial/> 
      </mesh>
    </Canvas>
  )
}

export default App
