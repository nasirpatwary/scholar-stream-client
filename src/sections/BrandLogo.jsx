import Marquee from "react-fast-marquee";
import brand2 from "../assets/brand1.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";
import Container from "../shared/Container";
const BrandLogo = () => {
  return (
    <Container className="mt-20">
      <div>
        <h3 className="text-2xl md:text-3xl text-center font-bold text-secondary dark:text-gray-200">
        Empowering Students Through Scholarships Worldwide
      </h3>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-[65ch] mx-auto">
        Thousands of students rely on our platform to discover verified scholarships 
        from reputable institutions. By partnering with leading organizations, we help 
        students turn their academic dreams into reality.
        </p>
      </div>
      <Marquee speed={50} pauseOnHover={true} className="cursor-pointer">
        <div className="grid grid-cols-6 gap-12 items-center mt-8">
          <div>
            <img className="dark:invert" src={brand2} alt="" />
          </div>
          <div>
            <img className="dark:invert" src={brand3} alt="" />
          </div>
          <div>
            <img className="dark:invert" src={brand4} alt="" />
          </div>
          <div>
            <img className="dark:invert" src={brand5} alt="" />
          </div>
          <div>
            <img className="dark:invert" src={brand6} alt="" />
          </div>
          <div>
            <img className="dark:invert" src={brand7} alt="" />
          </div>
        </div>
      </Marquee>
    </Container>
  );
};

export default BrandLogo;