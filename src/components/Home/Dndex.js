import {useEffect, useRef} from "react";
import "./dnd.css";
import { OrbitControls ,Stars,RoundedBox} from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assests/txt/earthdaymap.jpg";
// import Nigths from '../../assests/textures/nightmap.jfif'
import Normal from "../../assests/txt/normalmap.jfif";
import Clouds from "../../assests/txt/cloudsmap.jfif";
import Specular from "../../assests/txt/specular.jfif";
import { useFrame, useLoader } from "@react-three/fiber";
import { SphereGeometry, TextureLoader } from "three";

const Dndex = () => {
  const [daymap, normalmap, cloudsmap, specularmap] = useLoader(TextureLoader, [
    EarthDayMap,
    Normal,
    Clouds,
    Specular,
  ]);

  const earthRef = useRef();
  const cloudyRef = useRef();

  useFrame(({clock})=>{
const time = clock.getElapsedTime();

earthRef.current.rotation.y = time / 7;

cloudyRef.current.rotation.y = time / 7
  })


  return (
    <>
    <pointLight color="#f6f6fb" position={[2,0,5]} intensity = {1.2}/>
 <Stars
  radius={300} // Radius of the inner sphere (default=100)
  depth={50} // Depth of area where stars should fit (default=50)
  count={10000} // Amount of stars (default=5000)
  factor={7} // Size factor (default=4)
  saturation={0} // Saturation 0-1 (default=0)
  fade // Faded dots (default=false)
/>
      <ambientLight intensity={1} />
      <mesh ref={cloudyRef} position={[0,0,3]}>
        <sphereGeometry args={[1.002, 32, 32]} />
        <meshPhongMaterial
          map={cloudsmap}
          opacity={0.2}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0,0,3]}>
        <sphereGeometry  args={[1.0, 32, 32]} />
        <meshPhongMaterial specularMap={specularmap} />
        <meshStandardMaterial map={daymap} normalmap={normalmap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={2.9}
   
        />
      </mesh>
      {/* <mesh>
      <RoundedBox sphereGeometry
  args={[2, 2, 2]} // Width, Height and Depth of the box
  
  radius={0.01} // Border-Radius of the box
  smoothness={1} // Optional, number of subdivisions
   // All THREE.Mesh props are valid
>
<meshPhongMaterial specularMap={specularmap} />
        <meshStandardMaterial map={daymap} normalmap={normalmap} />
  <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
  <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={2.9}
   
        />
</RoundedBox>
</mesh> */}
    </>
  );
};

export default Dndex;
