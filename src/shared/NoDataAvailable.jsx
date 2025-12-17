import { Link } from "react-router";
import logo from "../assets/error.json"
import Lottie from "lottie-react";
const NoDataAvailable = ({ title, subtitle }) => {
  return (
    <section className="text-center max-w-3xl mx-auto my-10 space-y-4 px-4">
       <div className="max-w-1/3 mx-auto">
        <Lottie animationData={logo} loop={true} />
       </div>
      <div className="space-y-2">
        <h2 className="text-2xl animate-gradient bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text font-bold dark:text-gray-100">
        Sorry! We couldn’t find the {title} you were looking for!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-[55ch] mx-auto text-sm md:text-base">
       {subtitle}
      </p>
      </div>
      <p className="mt-5 md:mt-8">
        <Link to="/dashboard/shcolarship" className="btn-primary">
            Add Scholarship
        </Link>
        </p>
    </section>
  );
};


export default NoDataAvailable