import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { me } from "../assets";
import { socialLinks } from "../constants";
import { useMobileMediaQuery } from "../utils";

// MobileBlob component- a blob with an image is shown on a mobile devices
const MobileBlob = () => {
  return (
    <div className="flex justify-center w-full mt-[4rem]">
      <svg
        className="w-[200px] fill-[#804dee]"
        viewBox="0 0 200 187"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <mask id="mask0" mask-type="alpha">
          <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
          <image className="w-[110px]" x="50" y="10" href={me} />
        </g>
      </svg>
    </div>
  );
};

const Hero = () => {
  // State to track whether the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    useMobileMediaQuery(setIsMobile);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`xs:absolute relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 xs:mb-0 mb-[2rem]`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Plamena</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tech enthusiast with a passion for{" "}
            <br className="sm:block hidden" /> learning and a knack for
            problem-solving.
          </p>

          <p className="flex gap-2 mt-2 z-10 absolute">
            <div
              onClick={() => window.open(socialLinks.github, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaGithub className="w-[20px] h-[20px] object-contain" />
            </div>

            <div
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaLinkedinIn className="w-[20px] h-[20px] object-contain" />
            </div>
          </p>
        </div>
      </div>

      <br />
      <br />
      <br className="sm:block hidden" />
      <br className="sm:block hidden" />

      {!isMobile && <ComputersCanvas />}
      {isMobile && <MobileBlob />}
    </section>
  );
};

export default Hero;
