import { useGetMyApplications } from "../../../hooks/usemongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import NoDataAvailable from "../../../shared/NoDataAvailable"
import ErrorPage from "../../ErrorPage"
import MyTable from "./MyTable"

const MyApplications = () => {
    const [applications, isLoading, isError] = useGetMyApplications()
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
        <th>UnivName</th>
        <th>SubCategory</th>
        <th>UnivAddress</th>
        <th>ApplicatFees</th>
        <th>ApplicatStatus</th>
        <th>Feedback</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map(apply => <MyTable key={apply._id} apply={apply} />)
      }
    </tbody>
      </table>
      </div>
      }
    </div>
    </>
  )
}

export default MyApplications