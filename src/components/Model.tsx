import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '@/lib/import-model';
import ModelContainer from '@/components/containers/ModelContainer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [, setCamera] = useState<THREE.OrthographicCamera>();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  const [initialCameraPosition] = useState(new THREE.Vector3(0, 10, 25));
  const [scene] = useState(new THREE.Scene());
  const [, setControls] = useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      // Update renderer to fill parent container space
      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;

      // Insert renderer into DOM
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // Camera
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.1,
        1000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      // Lighting
      scene.add(new THREE.PointLight(0xcccccc, 1, 5));
      scene.add(new THREE.DirectionalLight(0xcccccc, 2));

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.enableDamping = true;
      controls.autoRotateSpeed *= -1;
      controls.target = target;
      setControls(controls);

      // Load exported model
      loadGLTFModel(scene, '/cozy.glb', {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
      });

      // Animation loop
      let req: number;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) + p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  // Resizing logic
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <ModelContainer ref={refContainer}>
      {loading && (
        <div className='relative left-1/2 top-1/2'>
          <ClimbingBoxLoader loading={loading} color='#ffffff' />
        </div>
      )}
    </ModelContainer>
  );
};

export default Model;
