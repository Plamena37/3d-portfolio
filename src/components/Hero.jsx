import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, linkedin } from "../assets";
import { socialLinks } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
              <img
                src={github}
                alt="source code"
                className="w-[25px] h-[25px] object-contain"
              />
            </div>

            <div
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkedin}
                alt="source code"
                className="w-[22px] h-[22px] object-contain"
              />
            </div>
          </p>
        </div>
      </div>

      <br />
      <br />
      <br className="sm:block hidden" />
      <br className="sm:block hidden" />

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
