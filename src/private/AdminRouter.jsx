import { Link } from "react-router"
import useAuth from "../hooks/useAuth"
import { useGetUserRole } from "../hooks/usemongodbCollections"
import LoadingSpinner from "../shared/LoadingSpinner"
import RoleContent from "../shared/RoleContent"
import Container from "../shared/Container"

const AdminRouter = ({children}) => {
  const {loading} = useAuth()
  const {role, isLoading} = useGetUserRole()
  if(loading || isLoading) return <LoadingSpinner />
  if(role !== "admin") return (
     <Container className="flex space-y-3 text-center flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <RoleContent roleBase="administrator" />
      <div className="space-x-4 mt-4">
        <Link to="/" className="btn btn-primary text-black/80">Home</Link>
      <Link to="/dashboard" className="btn btn-primary text-black/80">Go to Dashboard</Link>
      </div>
    </Container>
  );
  
  return children
}

export default AdminRouter