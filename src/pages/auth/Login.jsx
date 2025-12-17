import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import  toast  from "react-hot-toast";
import Input from "../../forms/Input";
import SocialLoing from "./SocialLogin";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInUser(data.email, data.password);
      reset();
      toast.success("login successfully!");
      navigate(location.state || "/");
    } catch (error) {
      if (error) return toast.error("should be match before email or password");
    }
  };
  return (
    <div className="space-y-4 max-w-sm mx-auto p-5 border border-gray-200 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          name="email"
          label="Email Address"
          type="email"
          control={control}
          placeholder="Enter your email"
          rules={{
            required: "Email is required",
          }}
        />

        <div className="relative">
          <Input
            name="password"
            label="Password"
            type={visible ? "text" : "password"}
            control={control}
            placeholder="Enter password"
            rules={{
              required: "Password is required",
            }}
          />
          <span
            onClick={() => setVisible(!visible)}
            className="absolute z-10 right-4 top-9 cursor-pointer"
          >
            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full"
        >
          {isSubmitting ? "Submitting..." : "Login"}
        </button>
        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            state={location.state}
            to="/register"
            className="text-secondary font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
      <SocialLoing />
    </div>
  );
};

export default Login;
