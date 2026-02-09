import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  );
};

export default App;
