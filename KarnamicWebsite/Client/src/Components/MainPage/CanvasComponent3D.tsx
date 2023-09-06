import {  useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh} from "three"; // Import PlaneGeometry from the 'three' library
import { GetBoxSize } from "./utils";



function RotatingBox() {
  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    // Rotate the box horizontally over time
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });


  const BoxSize = GetBoxSize();

  return (
    <mesh
      ref={boxRef}
      castShadow
      position={[0.1, -0.1, 2]}
      rotation={[0, 0, 0]}
    >
      <boxGeometry args={[BoxSize[0],BoxSize[1],BoxSize[2]]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function CanvasComponent3D() {
  return (
    <Canvas shadows={true}>
      {/* Ambient Light */}

      {/* Directional Light */}
      <directionalLight castShadow position={[-3, 4, 1]} intensity={1} />

      {/*Ground Plane
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, , 0]}>
          <primitive object={new PlaneGeometry(10, 10)} /> {/* Use primitive prop
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>*/}

      {/* Rotating Cube */}
      <RotatingBox />
    </Canvas>
  );
}

export default CanvasComponent3D;
