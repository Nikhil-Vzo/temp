import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useRef, useEffect, useState } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const scale = isMobile ? 0.18 : isTablet ? 0.22 : 0.28;
  const position = isMobile 
    ? [0, -1.2, 0] 
    : isTablet 
      ? [0.6, -1.1, 0] 
      : [1.1, -1.0, 0];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.1, rootMargin: "100px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <ParallaxBackground />
      <div className="mx-auto max-w-7xl w-full flex items-start justify-center md:items-start md:justify-start">
        <HeroText />
      </div>
      <figure
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {isVisible && (
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={scale}
                  position={position}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        )}
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
