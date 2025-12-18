import { useSearchParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const PaymentCancelled = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  const sessionId = searchParams.get("session_id")

  const [scholarshipName, setScholarshipName] = useState("")
  const [error, setError] = useState("Payment was cancelled by the user.")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInfo = async () => {
      if (!sessionId) {
        setLoading(false)
        return
      }

      try {
        // optional: server থেকে basic info আনতে চাইলে
        const { data } = await axiosSecure.get(
          `/session-cancelled?session_id=${sessionId}`
        )
        setScholarshipName(data?.scholarshipName || "")
        setError(data?.message || error)
      } catch {
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchInfo()
  }, [sessionId, axiosSecure])

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold text-red-600">
          Payment Cancelled ❌
        </h1>

        <div className="text-sm space-y-1">
          {scholarshipName && (
            <p>
              <strong>Scholarship:</strong> {scholarshipName}
            </p>
          )}
          <p className="text-red-500">
            <strong>Reason:</strong> {error}
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full border border-red-500 text-red-600 py-2 rounded-lg mt-3"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  )
}

export default PaymentCancelled
