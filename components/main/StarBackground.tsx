"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  // TypeScript에서 any 타입은 변수나 함수의 매개변수, 반환 값 등이 어떤 타입이든 될 수 있음을 나타냅니다.
  //  즉, any 타입을 사용하면 TypeScript의 타입 체크 기능을 일시적으로 비활성화하여,
  //  모든 종류의 값이 허용되는 '동적 타입'을 사용할 수 있습니다.
  //   이는 JavaScript의 유연성을 활용하고 싶을 때 유용하지만, 타입 안정성을 잃게 되므로 가능한 한 사용을 피하는 것이 좋습니다.

  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.4 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.008}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[24]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
