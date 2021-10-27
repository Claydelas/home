import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import * as THREE from 'three';

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.scale.set(1.6, 1.6, 1.6);
        obj.position.y = -3
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        obj.traverse(function (child) {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
            child.frustumCulled = false
          }
        })
        scene.add(obj)
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}