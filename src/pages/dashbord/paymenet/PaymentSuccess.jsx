import { useEffect } from "react"
import { useSearchParams } from "react-router"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const axiosSecure = useAxiosSecure()
 useEffect(() => {
  const updateSession = async () => {
    if (sessionId) {
      const { data } = await axiosSecure.patch(
        `/session-status?session_id=${sessionId}`
      )
      console.log(data)
    }
  }

  updateSession()
}, [sessionId, axiosSecure])
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess