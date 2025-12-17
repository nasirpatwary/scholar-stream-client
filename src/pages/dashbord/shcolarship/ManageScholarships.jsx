import { useGetManangeScholarships } from "../../../hooks/usemongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import NoDataAvailable from "../../../shared/NoDataAvailable"
import ErrorPage from "../../ErrorPage"
import ScholarshipsTable from "./ScholarshipsTable"

const ManageScholarships = () => {
    const [scholarships, isLoading, isError] = useGetManangeScholarships()
    if(isLoading) return <LoadingSpinner />
    if(isError) return <ErrorPage />
  return (
    <>
    <title>Manage || Scholarship</title>
    <div className="px-4">
      {
        scholarships.length < 1 ? <NoDataAvailable title="scholarships" subtitle="But don’t worry — you can add a new scholarship now and help students discover valuable funding opportunities through our platform." />:
        <div className="overflow-x-auto mt-8 rounded-box border border-base-content/5 dark:bg-[#121212] bg-base-100">
      <table className="table">
      {/* head */}
      <thead>
      <tr className="dark:text-gray-200">
        <th>Application Fees</th>
        <th>Service Charge</th>
        <th>Deadline</th>
        <th>Post Date</th>
        <th>User Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        scholarships.map(scholarship => <ScholarshipsTable key={scholarship._id} scholarship={scholarship} />)
      }
    </tbody>
      </table>
      </div>
      }
    </div>
    </>
  )
}

export default ManageScholarships