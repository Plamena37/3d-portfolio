import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Earth component loads and displays the 3D model of Earth using the GLTF loader
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Display the Earth model with scaling and positioning
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component provides a 3D canvas with an animated Earth model
const EarthCanvas = () => {
  // React-three-fiber Canvas for 3D rendering and suspense for fallback during initial loading
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls for interactive camera control */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
