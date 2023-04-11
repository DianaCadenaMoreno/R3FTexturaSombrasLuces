import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Door() {
    const PATH = "/static/textures/sphere/"

    const props = useTexture({
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg',
        opacityMap: PATH + 'opacity.jpg'
    })

    
    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <sphereGeometry args={[1, 24, 56]}/>
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}