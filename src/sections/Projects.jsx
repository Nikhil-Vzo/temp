import { useState, useCallback, useMemo, memo } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!window.matchMedia("(pointer: fine)").matches) return;
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    },
    [x, y]
  );

  const [preview, setPreview] = useState(null);

  const projectList = useMemo(
    () =>
      myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      )),
    []
  );

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading text-white">Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-accent/20 to-transparent mt-12 h-[1px] w-full" />
      {projectList}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded border border-accent/30 shadow-[0_0_30px_#33c2cc20] pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
