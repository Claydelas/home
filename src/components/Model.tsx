import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import { Color, Vector3 } from 'three';
import { Suspense, useEffect } from 'react';

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

  let frame = 0;
  useFrame(({ camera }) => {
    frame = frame <= 100 ? frame + 1 : frame;
    if (frame <= 100) {
      const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
      camera.position.y = 10;
      camera.position.x =
        cpos.x * Math.cos(rotSpeed) - cpos.z * Math.sin(rotSpeed);
      camera.position.z =
        cpos.z * Math.cos(rotSpeed) + cpos.x * Math.sin(rotSpeed);
      camera.lookAt(0, 0, 0);
    }
  });
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  return <primitive object={scene} {...props} />;
}

export default function ModelCanvas({ setLoading }: LoadingProps) {
  const cameraPos = new Vector3(0, 10, 25);
  const white = new Color(0.8, 0.8, 0.8);

  return (
    <Canvas
      mode='concurrent'
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
          setLoading={setLoading}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/cozy.glb');
