import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[14px] color-[#f1f1f1] font-[800] mt-10">{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
