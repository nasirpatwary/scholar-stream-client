import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import uploadToImageBB from "../../utils/uploadToImageBB";
import Input from "../../forms/Input";
import usePostUserDB from "../../hooks/usePostUserDB";
import SocialLoing from "./SocialLogin";
const Register = () => {
  const { mutateAsync } = usePostUserDB();
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { createUser, createUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Submitted:", data);
      await createUser(data.email, data.password);
      const imgURL = await uploadToImageBB(data.photo);
      console.log(imgURL);
      await createUserProfile(data.name, imgURL);
      //  create data base
      const userInfo = {
        name: data.name,
        email: data.email,
        img: imgURL,
      };
      console.log(userInfo);
      await mutateAsync(userInfo);
      reset();
      navigate(location.state || "/");
      toast.success("register successfully!");
    } catch (error) {
      if (error) toast.error("auth email already in use!");
    }
  };
  return (
    <>
      <div className="space-y-4 max-w-sm mx-auto p-5 border border-gray-200 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            name="name"
            label="Full Name"
            control={control}
            placeholder="Enter your name"
            rules={{ required: "Name is required" }}
          />
          <Input
            name="photo"
            type="file"
            label="Photo URL"
            control={control}
            placeholder="Enter your photo url.."
            rules={{ required: "Photo url is required" }}
          />

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
                validate: {
                  hasUpper: (value) =>
                    /[A-Z]/.test(value) ||
                    "At least one uppercase letter required",
                  hasLower: (value) =>
                    /[a-z]/.test(value) ||
                    "At least one lowercase letter required",
                  hasNumber: (value) =>
                    /\d/.test(value) || "At least one number required",
                  hasSpecial: (value) =>
                    /[@$!%*?&]/.test(value) ||
                    "At least one special character (@$!%*?&) required",
                  length: (value) =>
                    value.length >= 8 || "Minimum 8 characters required",
                },
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
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
          <p className="text-center text-sm text-gray-700">
            Already Have an accoun?{" "}
            <Link
              state={location.state}
              to="/login"
              className="text-secondary font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
        <SocialLoing />
      </div>
    </>
  );
};

export default Register;
