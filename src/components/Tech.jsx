import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";
import { useMobileMediaQuery } from "../utils";

const Tech = () => {
  // State to track whether the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    useMobileMediaQuery(setIsMobile);
  }, []);

  const numTechnologiesToRender = isMobile ? 6 : technologies.length;

  // Slice the array to get only the first 6 numbers of technologies for mobile devices
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
