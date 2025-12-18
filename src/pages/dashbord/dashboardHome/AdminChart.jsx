import { useGetChartData } from "../../../hooks/useMongodbCollections"
import LoadingSpinner from "../../../shared/LoadingSpinner"

const AdminChart = () => {
   const [chartData, isLoading, isError]  = useGetChartData()
   if(isLoading) return <LoadingSpinner />
   if(isError) return <isError />
   console.log(chartData)
  return (
    <div>AdminChart</div>
  )
}

export default AdminChart