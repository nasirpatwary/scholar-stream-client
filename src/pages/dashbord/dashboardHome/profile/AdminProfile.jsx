import UpdateProfile from "../../../../components/modals/UpdateProfile";

const AdminProfile = ({ user }) => {
  return (
    <>
    <title>Admin Profile</title>
    <div className="max-w-xl mx-auto flex flex-col items-center bg-white dark:bg-gray-900 shadow rounde-b-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        👑 Admin Profile
      </h2>

      <div className="space-y-2">
        <div className="relative">
        <img className="size-20 rounded-full mx-auto" src={user?.photoURL} alt="" />
        <div className="absolute left-1/2 bottom-1 bg-primary rounded-full">
        <UpdateProfile />
        </div>
        </div>
        <p><strong>Name:</strong> {user?.displayName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> Admin</p>
        <p><strong>Joined:</strong> {user?.metadata?.creationTime.split("GMT")}</p>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;
