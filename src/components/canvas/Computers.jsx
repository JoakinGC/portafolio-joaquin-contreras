import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";

import CanvasLoader from "../generic/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./imac/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.9} />
      <hemisphereLight intensity={0.4} groundColor="black" />

      <directionalLight position={[2, 5, 2]} intensity={1.5} castShadow />
      <directionalLight position={[0, 3, 5]} intensity={2.5} castShadow />

      <pointLight position={[0, 2, 3]} intensity={2.5} decay={1.2} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />

      <Environment preset="city" />

      <primitive
        object={computer.scene}
        scale={0.5}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[0,-1.75,0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
