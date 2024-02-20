import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

// CertificateCard component represents an individual certificate card
const CertificateCard = ({ index, name, credentials, company, image }) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative w-[250px] h-[350px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
          <div
            onClick={() => window.open(credentials, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <MdOpenInNew className="w-[20px] h-[20px] object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5 mb-8">
        <h3 className="text-white font-bold text-[22px]">
          {name} &mdash;{company}
        </h3>
      </div>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievments</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <CertificateCard index={index} {...certificate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
