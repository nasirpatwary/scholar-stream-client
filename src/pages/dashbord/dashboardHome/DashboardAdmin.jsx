import { useGetAminStats } from "../../../hooks/useMongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import ErrorPage from "../../ErrorPage"
import AdminChart from "../dashboardHome/AdminChart"
const DashboardAdmin = () => {
  const [adminStats,isLoading, isError] = useGetAminStats()
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  const {totalUsers, totalScholarships, totalFeesCollected} = adminStats
  return (
    <>
    <title>Dashboard Admin || Page</title>
    <div className="mt-12 px-4">
    <div className="grid md:grid-cols-3 gap-6">
      {/* Total Users */}
      <div className="rounded-xl shadow p-6 border border-gray-400 dark:bg-gray-900">
        <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">
          {totalUsers}
        </p>
      </div>

      {/* Total Scholarships */}
      <div className="rounded-xl shadow p-6 border border-gray-400 dark:bg-gray-900">
        <h3 className="text-sm font-medium text-gray-500">
          Total Scholarships
        </h3>
        <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">
          {totalScholarships}
        </p>
      </div>

      {/* Total Fees Collected */}
      <div className="rounded-xl shadow p-6 border border-gray-400 dark:bg-gray-900">
        <h3 className="text-sm font-medium text-gray-500">
          Total Fees Collected
        </h3>
        <p className="text-3xl font-bold text-green-600 mt-2">
          ৳ {totalFeesCollected}
        </p>
      </div>

    </div>
    <AdminChart />
    </div>
    </>
  );
}

export default DashboardAdmin