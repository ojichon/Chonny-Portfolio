import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitalControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader'



const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <div>Ball</div>
  )
}

export default Ball