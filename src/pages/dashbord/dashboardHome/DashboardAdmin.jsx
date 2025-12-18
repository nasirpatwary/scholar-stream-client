import { useGetAminStats } from "../../../hooks/usemongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import ErrorPage from "../../ErrorPage"

const DashboardAdmin = () => {
  const [adminStats,isLoading, isError] = useGetAminStats()
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  console.log(adminStats)
  return (
    <>
    <title>Dashboard Admin || Page</title>
    <div>
      Dashboard Admin
    </div>
   </>
  )
}

export default DashboardAdmin