import noFound from "../assets/not.png";
import { Link } from "react-router";
const ErrorPage = () => {
    return (
       <div className="text-center space-y-2 my-10">
          <img className="max-w-1/3 mx-auto" src={noFound} alt="" />
        <h2 className="text-2xl animate-gradient bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text">
          Sorry! We couldn’t find the scholarship you were looking for!
      </h2>
      <p className="max-w-[55ch] mx-auto">
        But don’t worry — thousands of other scholarships and funding opportunities are available on our Home page. Explore and find the one that fits your academic journey.
      </p>

      <p className="mt-5 md:mt-8">
        <Link to="/" className="btn-primary">
          Go to Home
        </Link>
      </p>
        </div>
    );
};

export default ErrorPage;