import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { Suspense, useEffect } from 'react';
import { Color, Vector3 } from 'three';

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

type LoadingProps = {
  loading?: boolean;
  setLoading: (loading: boolean) => void;
};
type ModelProps = {
  cpos: { x: number; y: number; z: number };
} & LoadingProps &
  JSX.IntrinsicElements['group'];

function Model({ setLoading, cpos, ...props }: ModelProps) {
  const { scene } = useGLTF('/cozy.glb', true);

  useFrame(
    ({
      camera,
      gl: {
        info: {
          render: { frame },
        },
      },
      invalidate,
    }) => {
      if (frame <= 100) {
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        camera.position.y = 10;
        camera.position.x =
          cpos.x * Math.cos(rotSpeed) - cpos.z * Math.sin(rotSpeed);
        camera.position.z =
          cpos.z * Math.cos(rotSpeed) + cpos.x * Math.sin(rotSpeed);
        camera.lookAt(0, 0, 0);
        // Force next frame since frameloop is set to demand
        invalidate();
      }
    }
  );
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  return <primitive object={scene} {...props} />;
}

export default function ModelCanvas({ setLoading }: LoadingProps) {
  const cameraPos = new Vector3(10, 10, 25);
  const white = new Color(0.8, 0.8, 0.8);
  const night = new Color(0.87, 0.1, 0.55);
  const day = new Color(0.4, 0.25, 0.34);

  const { theme } = useTheme();
  return (
    <Canvas
      mode='concurrent'
      frameloop='demand'
      dpr={window.devicePixelRatio}
      orthographic
      camera={{
        position: cameraPos,
        far: 1000,
        near: 0.1,
        zoom: 23,
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <pointLight
          color={theme === 'dark' ? night : day}
          distance={theme === 'dark' ? 8 : 5}
          power={theme === 'dark' ? 15 : 30}
        />
        <directionalLight
          color={white}
          intensity={theme === 'dark' ? 0.5 : 1.25}
        />
        <ambientLight
          color={white}
          intensity={theme === 'dark' ? 0.02 : 0.15}
        />
        <Model
          position={[0, -3, 0]}
          scale={[1.6, 1.6, 1.6]}
          cpos={cameraPos}
          setLoading={setLoading}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/cozy.glb');
