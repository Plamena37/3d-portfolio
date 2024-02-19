import { Html, useProgress } from "@react-three/drei";

// Loader component using @react-three/drei for 3D loading screen and Html overlay for displaying loading progress
const Loader = () => {
  // Getting progress from useProgress hook to get the loading progress
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default Loader;
