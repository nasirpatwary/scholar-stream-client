import { BiHome } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";
import { FaShirtsinbulk } from "react-icons/fa";
import { useGetUserRole } from "../../hooks/usemongodbCollections";
import { SiAwssecretsmanager } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";

const DashboarPath = () => {
     const {logOut} = useAuth()
     const {role} = useGetUserRole()
     const dashLinks = (
    <>
      <NavLink
        to="/"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="ScholarStream"
      >
        <BiHome size={20} />
        <span className="is-drawer-close:hidden">
          Scholar<span className="text-primary">Stream</span>
        </span>
      </NavLink>
     {role === "admin" && <>
        <NavLink
        to="/dashboard/admin/profile"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="My Profile"
      >
        <GiRamProfile  size={20} />
        <span className="is-drawer-close:hidden">My Profile</span>
      </NavLink>
        <NavLink
        to="/dashboard/all/users"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="All Users"
      >
        <FaUsers size={20} />
        <span className="is-drawer-close:hidden">All Users</span>
      </NavLink>
      <NavLink
        to="/dashboard/shcolarship"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="Add Shcolarship"
      >
        <FaShirtsinbulk size={20} />
        <span className="is-drawer-close:hidden">Add Shcolarship</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage/scholarships"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="Manage Shcolarship"
      >
        <SiAwssecretsmanager size={22} />
        <span className="is-drawer-close:hidden">Ma Shcolarships</span>
      </NavLink>
     </>
     }
     {
      role === "moderator" && <>
      <NavLink
        to="/dashboard/moderator/profile"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="My Profile"
      >
        <GiRamProfile  size={20} />
        <span className="is-drawer-close:hidden">My Profile</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage/applications"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="Manage Applications"
      >
        <FaGoogleScholar size={22} />
        <span className="is-drawer-close:hidden">Manage Applications</span>
      </NavLink>
      <NavLink
        to="/dashboard/all/reviews"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="All Reviews"
      >
        <VscPreview size={22} />
        <span className="is-drawer-close:hidden">All Reviews</span>
      </NavLink>
      </>
     }

     {
     role === "student" && <>
      <NavLink
        to="/dashboard/myApplications"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="My Applications"
      >
        <IoSchool size={20} />
        <span className="is-drawer-close:hidden">My Applications</span>
      </NavLink>
      <NavLink
        to="/dashboard/myReviews"
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="My Reviews"
      >
        <MdPreview size={20} />
        <span className="is-drawer-close:hidden">My Reviews</span>
      </NavLink>  
     </>
     }
      <div
      onClick={logOut}
        className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip="LogOut"
      >
      <MdOutlineLogout size={22} />
      <button className="is-drawer-close:hidden">
        LogOut
      </button>
      </div>
    </>
  );
  return ( 
  <ul className="menu text-lg space-y-6 w-full grow">
    {/* List item */}
    {dashLinks}
    </ul>
    )
}

export default DashboarPath