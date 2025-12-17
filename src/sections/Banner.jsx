import { ButtonComponent } from "../shared/ButtonComponent";
import { IoSchool } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { SiW3Schools } from "react-icons/si";
import { FaDraft2Digital } from "react-icons/fa6";
import hero from "../assets/removebg-preview.png"
import Container from "../shared/Container";
const Banner = () => {
  return (
  <div className="space-y-20 bg-primary/5">
  <Container className="grid lg:grid-cols-2 gap-10 items-center py-16">
  <div className="space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Discover Global Scholarships <br />
      <span className="text-primary">That Shape Your Future</span>
    </h1>

    <p className="text-gray-600 dark:text-gray-200 text-lg">
      Explore verified scholarships from top universities worldwide
      designed for students at every academic level.
    </p>

    <ul className="space-y-2 text-gray-700 dark:text-gray-200">
      <li className="flex items-center gap-2"> <IoSchool /> Open to students from all countries</li>
      <li className="flex items-center gap-2"> <MdOutlineEventAvailable /> Fully funded & partial scholarships available</li>
      <li className="flex items-center gap-2"> <SiW3Schools />  100% free & trusted platform</li>
      <li className="flex items-center gap-2"><FaDraft2Digital /> Carefully reviewed opportunities</li>
    </ul>

    <div className="md:flex gap-4 space-y-3 md:space-y-0">
      <ButtonComponent className="bg-primary w-full md:w-fit text-black/80">
        Start Finding Scholarships
      </ButtonComponent>
      <ButtonComponent className="border-primary w-full md:w-fit">
        Browse Universities
      </ButtonComponent>
    </div>
  </div>

  <div className="flex justify-center relative">
    <img
      src={hero}
      alt="Students searching for global scholarships"
      className=""
    />
    <div className="absolute bottom-0 bg-white/30 backdrop-blur skeleton w-full md:w-1/2 p-4 rounded-xl shadow-lg">
    <h3 className="text-lg font-semibold">
      🎓 Scholarships Open Now
    </h3>
    <p className="text-sm text-gray-800">
      Programs for Diploma, Bachelor & Masters
    </p>
  </div>
  </div>
     </Container>
    </div>
  );
};


export default Banner