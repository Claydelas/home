import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html, OrbitControls } from '@react-three/drei';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { useTheme } from 'next-themes';
import { Color, Vector3 } from 'three';
import Model from '@/components/Model';

function Placeholder() {
  const { theme } = useTheme();
  return (
    <Html>
      <div className='absolute left-1/2 top-1/2'>
        <ClimbingBoxLoader
          color={`${theme === 'dark' ? '#f0e7db' : '#202023'}`}
        />
      </div>
    </Html>
  );
}

function ModelContainer() {
  const cameraPos = new Vector3(0, 10, 25);
  const white = new Color(0.8, 0.8, 0.8);

  return (
    <div className='w-64 h-64 mx-auto mb-5 relative'>
      <Canvas
        mode='concurrent'
        orthographic
        camera={{
          position: cameraPos,
          far: 1000,
          near: 0.1,
          zoom: 23,
        }}
      >
        <Suspense fallback={<Placeholder />}>
          <OrbitControls autoRotate autoRotateSpeed={-3} />
          <pointLight
            color={new Color(0.4, 0.25, 0.34)}
            intensity={1}
            distance={5}
            power={30}
          />
          <directionalLight color={white} intensity={1.5} />
          <ambientLight color={white} intensity={0.15} />
          <Model
            position={[0, -3, 0]}
            scale={[1.6, 1.6, 1.6]}
            cpos={cameraPos}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelContainer;
