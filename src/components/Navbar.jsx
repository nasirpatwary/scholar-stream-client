import { Link, NavLink, useLocation } from "react-router";
import Container from "../shared/Container";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonComponent } from "../shared/ButtonComponent";
import { MdDashboard } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";
import SocialLoing from "../pages/auth/SocialLogin";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { user, logOut } = useAuth();
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all/scholarships">All Scholarships</NavLink>
    </>
  );
  useEffect(() => {
    if (open) setOpen(false);
  }, [location.pathname]);
  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-sm z-50">
      <Container className="navbar justify-between">
        <div>
          <Link to="/" className="text-2xl text-primary flex">
           <GiSchoolBag size={28} />ScholarStream
          </Link>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
          <ul className="gap-6 font- menu-horizontal">{links}</ul>
        </div>
        <div>
          {user ? (
            <div onClick={() => setMenu(!menu)} className="hidden lg:block">
              <img
                className="size-8 rounded-full mx-auto object-cover cursor-pointer"
                referrerPolicy="no-referrer"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co.com/H83Tqhy/student-profile-fimale.png"
                }
                alt={user?.displayName || "user"}
              />
              {menu && (
                <div
                  className={`fixed z-50 -translate-x-4/5 shadow-lg bg-base-100 dark:bg-gray-950 rounded top-16 p-4 w-52`}
                >
                  <div className="space-y-2">
                       <img
                      className="size-10 rounded-full object-cover cursor-pointer"
                      referrerPolicy="no-referrer"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/H83Tqhy/student-profile-fimale.png"
                      }
                      alt={user?.displayName || "user"}
                    />
                      <p className="text-sm">{user?.displayName}</p>
                      <Link to="/dashboard" className="flex gap-2 items-center">
                      <MdDashboard />
                      Dashboard
                    </Link>
                    <button onClick={logOut} className="flex gap-2 items-center cursor-pointer ">
                     <MdOutlineLogout size={22} /> LogOut
                    </button>
                   </div>
                  </div>
              )}
            </div>
          ) : (
            <div className="lg:flex gap-2 hidden">
              <ButtonComponent to="/login" className="btn-sm border-primary">
                Login
              </ButtonComponent>
              <ButtonComponent
                to="/register"
                className="btn-sm bg-primary text-black/80"
              >
                Regiter
              </ButtonComponent>
            </div>
          )}
          {/* Mobile Menu */}
          <div className="lg:hidden">
            {open ? (
              <X
                size={22}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <Menu
                size={22}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            )}

            {/* Mobile Drawer */}
            <div
              className={`fixed top-16 dark:bg-gray-950 bg-base-100 right-0 w-full md:w-1/3 h-screen shadow-lg transition-transform duration-500 ease-in-out transform ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="menu space-y-4 font-medium p-4">
                {links}
                {user ? (
                  <div className="space-y-2">
                    <Link to="/dashboard" className="flex gap-2 items-center">
                      <MdDashboard />
                      Dashboard
                    </Link>
                    <div className="mt-6 space-y-2">
                      <img
                      className="size-10 rounded-full object-cover cursor-pointer"
                      referrerPolicy="no-referrer"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/H83Tqhy/student-profile-fimale.png"
                      }
                      alt={user?.displayName || "user"}
                    />
                    <p className="text-sm">{user?.displayName}</p>
                      <hr />
                    <button onClick={logOut} className="flex gap-2 items-center cursor-pointer ">
                     <MdOutlineLogout size={22} /> LogOut
                    </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <ButtonComponent
                      to="/register"
                      className="btn-sm bg-primary"
                    >
                      Register
                    </ButtonComponent>
                    <ButtonComponent
                      to="/login"
                      className="btn-sm bg-primary text-black/80"
                    >
                      Login
                    </ButtonComponent>
                    <SocialLoing />
                  </>
                )}
              </ul>
            </div>

            {/* Background Overlay */}
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              ></div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
