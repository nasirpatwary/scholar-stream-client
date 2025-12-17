import { Outlet } from "react-router";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import DashboarPath from "../pages/dashbord/DashboarPath";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DarkMode from "../shared/DarkMode";
const DashboardLayout = () => {
 const {user} = useAuth()
   const [menu, setMenu] = useState(false);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar bg-base-200 dark:bg-gray-900 justify-between w-full backdrop-blur-sm">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <TbLayoutSidebarLeftExpand size={20} />
          </label>
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
                  className={`fixed z-50 dark:bg-gray-950 bg-base-100 right-0 top-16 p-4 w-52 shadow rounded`}
                >
                  <div className="text-center space-y-1">
                       <img
                      className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                      referrerPolicy="no-referrer"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/H83Tqhy/student-profile-fimale.png"
                      }
                      alt={user?.displayName || "user"}
                    />
                      <p className="text-lg">{user?.displayName}</p>
                      <p className="text-sm">{user?.email}</p>
                   </div>                           
                  </div>
              )}
            </div>
        </nav>
        <Outlet />
        <DarkMode />
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full bg-base-300 dark:bg-gray-900 shadow-2xl flex-col items-start is-drawer-close:w-18 is-drawer-open:w-64 p-4">
          {/* Sidebar content here */}
          <DashboarPath />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
