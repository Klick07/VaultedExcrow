// import React, { useMemo, useLayoutEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useEffect } from "react";


// export default function MorphingParticles({ urlA, urlB, urlC, scrollrefgive }) {
//     gsap.registerPlugin(ScrollTrigger);
//     const meshRef = React.useRef();
//   const { nodes: nodesA } = useGLTF(urlA);
//   const { nodes: nodesB } = useGLTF(urlB);
//   const { nodes: nodesC } = useGLTF(urlC);
//   const rawposA = [];
//   const rawposB = [];
//   const rawposC = [];


//   const shaderData = useMemo(() => {
//     // 1. Get positions from Model A
//     const meshA = Object.values(nodesA).filter((node) => node.type === "Mesh");

//     for (let i = 0; i < meshA.length; i++) {
//       rawposA.push(...meshA[i].geometry.attributes.position.array);
//     }
//     const reductionFactor = 4;
//     const posA = new Float32Array(Math.floor((rawposA.length/3) / reductionFactor) * 3);
//     for (let i = 0; i < posA.length / 3; i++) {
//       const sourceIndex = i * 3 * reductionFactor;
//       const targetIndex = i * 3;
      
//       posA[targetIndex] = rawposA[sourceIndex]; 
//       posA[targetIndex + 1] = rawposA[sourceIndex + 1]; 
//       posA[targetIndex + 2] = rawposA[sourceIndex + 2]; 
//     }
    
//     const meshB = Object.values(nodesB).filter((node) => node.type === "Mesh");
//     for (let i = 0; i < meshB.length; i++) {
//       rawposB.push(...meshB[i].geometry.attributes.position.array);
//     }
    
//     const posB = new Float32Array(rawposB);
//     for (let i = 0; i < posB.length; i++) {
//       posB[i] /= 120;
//     }

//     const meshC = Object.values(nodesC).filter((node) => node.type === "Mesh");
//     for (let i=0; i <meshC.length; i++){
//         rawposC.push(...meshC[i].geometry.attributes.position.array);
//     }
//     const posc = new Float32Array(Math.floor((rawposA.length/3) / reductionFactor) * 3);
//     for (let i = 0; i < posA.length / 3; i++) {
//       const sourceIndex = i * 3 * reductionFactor;
//       const targetIndex = i * 3;
      
//       posc[targetIndex] = rawposC[sourceIndex]; 
//       posc[targetIndex + 1] = rawposC[sourceIndex + 1]; 
//       posc[targetIndex + 2] = rawposC[sourceIndex + 2]; 
//     }
    
//     const count = posA.length / 3;
//     const finalPosB = new Float32Array(posA.length);
//     for (let i = 0; i < posA.length; i++) {
//       // If Model B is smaller, it loops back to the start (modulo)
//       finalPosB[i] = posB[i % posB.length];
//     }
//     const finalPosC = new Float32Array(posB.length);
//     for (let i = 0; i < posB.length; i++) {
//       // If Model B is smaller, it loops back to the start (modulo)
//       finalPosC[i] = posc[i % posc.length];
//     }


//     return { posA, finalPosB, finalPosC, count };
//   }, [nodesA, nodesB]);

//   // 4. Custom Shader
//   const uniforms = useMemo(
//     () => ({
//       uProgress: { value: 0 },
//       uProgress2: { value: 0 },
//       uColor: { value: new THREE.Color("#00f3ff") },
//       uSize: { value: 2.0 },
//     }),
//     [],
//   );

//   // 5. Trigger the Morph (e.g., on click)

//     // This is the core logic that links Scroll to the Shader
//     useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: scrollrefgive.current,
//         start: "top top",           
//         end: "+=100%", 
//         pin: true,                
//         scrub: 1,                   
//       }
//     });

//     tl.to(uniforms.uProgress, { value: 1, ease: "power1.inOut" });
  
//   // Morph B to C
//   tl.to(uniforms.uProgress2, { value: 1, ease: "power1.inOut" });

//     return () => tl.kill(); // Cleanup when component unmounts
//     }, [uniforms, scrollrefgive]);

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={shaderData.count}
//           array={shaderData.posA}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-targetPosition"
//           count={shaderData.count}
//           array={shaderData.finalPosB}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-targetPosition2"
//           count={shaderData.count}
//           array={shaderData.finalPosC}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <shaderMaterial
//         transparent
//         depthWrite={false}
//         blending={THREE.AdditiveBlending}
//         uniforms={uniforms}
//         vertexShader={`
//           attribute vec3 targetPosition;
//           attribute vec3 targetPosition2;
//           uniform float uProgress;
//           uniform float uProgress2;
//           uniform float uSize;
//           void main() {
//             // LERP between original position and targetPosition
//             vec3 morph1 = mix(position, targetPosition, uProgress);
//             vec3 finalPosition = mix(morph1, targetPosition2, uProgress2);
            
//             vec4 mvPosition = modelViewMatrix * vec4(finalPosition, 1.0);
//             gl_PointSize = uSize * (3.0 / -mvPosition.z);
//             gl_Position = projectionMatrix * mvPosition;
//           }
//         `}
//         fragmentShader={`
//           uniform vec3 uColor;
//           void main() {
//             // Make the square dots look like soft circles
//             float dist = distance(gl_PointCoord, vec2(0.5));
//             if (dist > 0.5) discard;
//             gl_FragColor = vec4(uColor, 1.0);
//           }
//         `}
//       />
//     </points>
//   );
// }

import React, { useMemo, useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MorphingParticles({ urlA, urlB, urlC, scrollrefgive }) {
  gsap.registerPlugin(ScrollTrigger);
  const meshRef = useRef();
  
  const { nodes: nodesA } = useGLTF(urlA);
  const { nodes: nodesB } = useGLTF(urlB);
  const { nodes: nodesC } = useGLTF(urlC);

  const shaderData = useMemo(() => {
    // Helper to get raw positions from GLTF nodes
    const getRawPos = (nodes) => {
      const meshes = Object.values(nodes).filter((node) => node.type === "Mesh");
      const positions = [];
      meshes.forEach(m => positions.push(...m.geometry.attributes.position.array));
      return new Float32Array(positions);
    };

    const rawA = getRawPos(nodesA);
    const rawB = getRawPos(nodesB);
    const rawC = getRawPos(nodesC);

    // 1. Downsample Model A (The Base)
    const reductionFactor = 4;
    const count = Math.floor((rawA.length / 3) / reductionFactor);
    const posA = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const s = i * 3 * reductionFactor;
      const t = i * 3;
      posA[t] = rawA[s]; posA[t+1] = rawA[s+1]; posA[t+2] = rawA[s+2];
    }

    // 2. Prepare Model B (Mapped to A's count)
    const finalPosB = new Float32Array(posA.length);
    for (let i = 0; i < count; i++) {
      const t = i * 3;
      const s = (t) % rawB.length;
      // Note: Applying your 1/120 scale here if Model B is huge
      finalPosB[t] = rawB[s] / 120;
      finalPosB[t+1] = rawB[s+1] / 120;
      finalPosB[t+2] = rawB[s+2] / 120;
    }

    // 3. Prepare Model C (Mapped to A's count)
    const finalPosC = new Float32Array(posA.length); // MUST be posA.length
    for (let i = 0; i < count; i++) {
      const t = i * 3;
      const s = (t) % rawC.length;
      finalPosC[t] = rawC[s];
      finalPosC[t+1] = rawC[s+1];
      finalPosC[t+2] = rawC[s+2];
    }

    return { posA, finalPosB, finalPosC, count };
  }, [nodesA, nodesB, nodesC]);

  const uniforms = useMemo(() => ({
    uProgress: { value: 0 },
    uProgress2: { value: 0 },
    uColor: { value: new THREE.Color("#00f3ff") },
    uSize: { value: 2.0 },
  }), []);

  useEffect(() => {
    if (!scrollrefgive.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollrefgive.current,
        start: "top top",           
        end: "+=200%", // Longer scroll for two transitions
        pin: true,                
        scrub: 1,                   
      }
    });

    tl.to(uniforms.uProgress, { value: 1, ease: "linear" });
    tl.to({}, { duration: 0.1 }); // Small pause between morphs
    tl.to(uniforms.uProgress2, { value: 1, ease: "linear" });

    return () => tl.kill();
  }, [uniforms, scrollrefgive]);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={shaderData.count}
          array={shaderData.posA}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-targetPosition"
          count={shaderData.count}
          array={shaderData.finalPosB}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-targetPosition2"
          count={shaderData.count}
          array={shaderData.finalPosC}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={`
          attribute vec3 targetPosition;
          attribute vec3 targetPosition2;
          uniform float uProgress;
          uniform float uProgress2;
          uniform float uSize;
          void main() {
            vec3 morph1 = mix(position, targetPosition, uProgress);
            vec3 finalPosition = mix(morph1, targetPosition2, uProgress2);
            
            vec4 mvPosition = modelViewMatrix * vec4(finalPosition, 1.0);
            // Increased multiplier for visibility
            gl_PointSize = uSize * (7.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          void main() {
            float dist = distance(gl_PointCoord, vec2(0.5));
            if (dist > 0.5) discard;
            gl_FragColor = vec4(uColor, 1.0);
          }
        `}
      />
    </points>
  );
}
