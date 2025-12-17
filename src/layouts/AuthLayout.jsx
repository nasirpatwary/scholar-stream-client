import { Outlet } from "react-router";
import logo from "../assets/login.json";
import Lottie from "lottie-react";
import Container from "../shared/Container";
const AuthLayout = () => {
  return (
    <Container>
      <div className="md:flex justify-center space-y-8 md:space-y-0 gap-8 h-screen items-center">
        <div>
          <Outlet />
        </div>
        <div>
          <Lottie animationData={logo} loop={true} />
        </div>
      </div>
    </Container>
  );
};

export default AuthLayout;
