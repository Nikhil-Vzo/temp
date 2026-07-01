import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-mono text-sm text-accent text-center">
      <div className="border border-accent/30 bg-surface/90 px-4 py-3 rounded">
        <span className="text-text-muted">$</span> loading_assets.sh {Math.round(progress)}%
      </div>
    </Html>
  );
};

export default Loader;
