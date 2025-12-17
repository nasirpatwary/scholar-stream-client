import useAuth from "../../../../hooks/useAuth";
import { useGetUserRole } from "../../../../hooks/usemongodbCollections";
import AdminProfile from "./AdminProfile";
import ModeratorProfile from "./ModeratorProfile";

const Profile = () => {
  const { user} = useAuth();
  const { role } = useGetUserRole()
  if (role === "admin") {
    return <AdminProfile user={user} />;
  }

  if (role === "moderator") {
    return <ModeratorProfile user={user} />;
  }

  return <p>Unauthorized</p>;
};

export default Profile;
