import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  // State to track whether the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Check if we are on a mobile device using a media query
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const numTechnologiesToRender = isMobile ? 7 : technologies.length;

  // Slice the array to get only the first 7 number of technologies on a mobile devices
  const visibleTechnologies = technologies.slice(0, numTechnologiesToRender);

  // Displays a set of technology icons using the BallCanvas
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
