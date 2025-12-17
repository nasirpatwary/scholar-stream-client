import { useGetUsers } from "../../../hooks/usemongodbCollections";
import LoadingSpinner from "../../../shared/LoadingSpinner"
import NoDataAvailable from "../../../shared/NoDataAvailable";
import ErrorPage from "../../ErrorPage"
import Table from "./Table";
const AllUsers = () => {
  const [users, isLoading, isError] = useGetUsers()
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  return (
    <>
    <title>
      All Users || Dashboard
    </title>
    <div className="px-4">
      {users.length > 0 ? (
        <div className="overflow-x-auto rounded-box border border-base-content/5 dark:bg-[#121212] bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="dark:text-gray-200">
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <Table key={user._id} {...user} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <NoDataAvailable title="user" subtitle="Don’t worry — creating an account gives you access to personalized scholarships and important updates." />
      )}
    </div>
    </>
  );
};

export default AllUsers