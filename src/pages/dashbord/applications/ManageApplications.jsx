import { useGetManageApplications } from "../../../hooks/usemongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import NoDataAvailable from "../../../shared/NoDataAvailable"
import ErrorPage from "../../ErrorPage"
import ManageTable from "./ManageTable"

const ManageApplications = () => {
    const [applications, isLoading, isError] = useGetManageApplications()
    if(isLoading) return <LoadingSpinner />
    if(isError) return <ErrorPage />
  return (
     <>
    <title>My Applications || Scholarship</title>
    <div className="px-4">
      {
        applications.length < 1 ? <NoDataAvailable title="applications" subtitle="But don’t worry — you can add a new applications now and help students discover valuable funding opportunities through our platform." />:
        <div className="overflow-x-auto mt-8 rounded-box border border-base-content/5 dark:bg-[#121212] bg-base-100">
      <table className="table">
      {/* head */}
      <thead>
      <tr className="dark:text-gray-200">
        <th>AName</th>
        <th>ApplyEmail</th>
        <th>UnName</th>
        <th>ApplyFeedback</th>
        <th>ApplyStatus</th>
        <th>PaymentStatus </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map(apply => <ManageTable key={apply._id} apply={apply} />)
      }
    </tbody>
      </table>
      </div>
      }
    </div>
    </>
  )
}

export default ManageApplications