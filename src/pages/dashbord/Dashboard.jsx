import { useGetUserRole } from "../../hooks/usemongodbCollections"
import DashboardAdmin from "./dashboardHome/DashboardAdmin"
import DashboardModerator from "./dashboardHome/DashboardModerator"
import DashboardStudent from "./dashboardHome/DashboardStudent"

const Dashboard = () => {
  const {role} = useGetUserRole()
  if(role === "admin") return <DashboardAdmin />
  if(role === "moderator") return <DashboardModerator />
  return <DashboardStudent />
}

export default Dashboard