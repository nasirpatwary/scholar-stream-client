import { useSearchParams, useNavigate } from "react-router"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useEffect, useState, useRef } from "react"
import toast from "react-hot-toast"

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()

  const [paymentData, setPaymentData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const calledRef = useRef(false) // 🔒 prevent double call

  useEffect(() => {
    if (!sessionId || calledRef.current) return
    calledRef.current = true

    const updateSession = async () => {
      try {
        const { data } = await axiosSecure.put(
          `/session-status?session_id=${sessionId}`
        )
        toast.success(data.transactionId)
        console.log(data)
        setPaymentData(data)
      } catch (err) {
        setError("Failed to verify payment.")
      } finally {
        setLoading(false)
      }
    }

    updateSession()
  }, [sessionId, axiosSecure])

  if (loading) {
    return <p className="text-center mt-10">Verifying payment...</p>
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful ✅
        </h1>

        <div className="text-sm space-y-1">
          {paymentData.scholarshipName && <p><strong>Scholarship:</strong> {paymentData.scholarshipName}</p>}
          {paymentData.universityCity && <p><strong>University:</strong> {paymentData.universityCity}</p>}
          {paymentData.universityCity && <p><strong>Amount Paid:</strong> ৳{Number(paymentData.applicationFees) + Number(paymentData.serviceCharge)}</p>}
          <p><strong></strong> </p>
          <p><strong>Transaction ID:</strong> {paymentData.transactionId}</p>
        </div>

        <button
          onClick={() => navigate("/dashboard/myApplications")}
          className="w-full bg-green-600 text-white py-2 rounded-lg mt-3"
        >
          Go to My Applications
        </button>
      </div>
    </div>
  )
}

export default PaymentSuccess
