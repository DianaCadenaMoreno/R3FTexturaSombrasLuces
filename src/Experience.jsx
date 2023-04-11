import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useHelper } from '@react-three/drei'
import Sphere from './Sphere'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper,HemisphereLightHelper,PointLightHelper,SpotLightHelper } from 'three'
import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(rectAreaLightRef, RectAreaLightHelper, 'black')
    useHelper(spotLightRef, SpotLightHelper, 1)
   
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight ref={directionalLightRef} castShadow={true} position={[4, 5, -10]} intensity={1.5}/>         
        {/* <hemisphereLight ref={hemisphereLightRef} castShadow={true} position={[0, 1, -10]} intensity={1.5}/>  */}
        {/* <pointLight ref={pointLightRef} castShadow={true} position={[4, 5, -10]} intensity={1.5}/>  */}
        {/* <rectAreaLight ref ={rectAreaLightRef} castShadow={true} position={[4, 5, -10]} intensity={1.5}/>   */}
        {/* <spotLight ref={spotLightRef} castShadow={true} position={[4, 5, -10]} intensity={1.5}/>  */}

        <ambientLight intensity={0.5} />
        <Sphere/>
        <Floor/>
    </>
}