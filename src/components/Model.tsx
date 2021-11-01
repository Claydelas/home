import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

type ModelProps = {
  cpos: { x: number; y: number; z: number };
} & JSX.IntrinsicElements['group'];

export default function Model({ cpos, ...props }: ModelProps) {
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
    }
  });
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/cozy.glb');
