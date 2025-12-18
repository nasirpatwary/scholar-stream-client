import { useLocation, useParams } from "react-router";
import { useGetApplicationsById } from "../../../hooks/usemongodbCollections";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMemo, useState } from "react";
const Payment = () => {
  const [isPosting, setIsPosting] = useState(false);
  const {applyId} = useParams()
  const { state } = useLocation();
  const axiosSecure = useAxiosSecure()
  const [application, isLoading, isError] = useGetApplicationsById(applyId)
  const applicationData = useMemo(
    () => state || application,
    [state, application]
  );

  if (!applicationData) return null;
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  const {
    scholarshipId,
    scholarshipName,
    universityName,
    userId,
    userEmail,
    applicationFees,
    serviceCharge,
  } = applicationData;
  const handlePostPayment = async () => {
    if (isPosting) return;

    setIsPosting(true);

    const paymentPayload = {
      applyId,
      userId,
      scholarshipId,
      scholarshipName,
      universityName,
      userEmail,
      totalAmount:
      Number(applicationFees) + Number(serviceCharge),
      createdAt: new Date(),
    };

    try {
      const {data} = await axiosSecure.post(
        "/create-checkout-session",
        paymentPayload
      );
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="px-4">
      <title>Payment || Page</title>
      <h2>University Name: {universityName}</h2>

      <button
        onClick={handlePostPayment}
        disabled={isPosting}
        className="btn btn-sm btn-primary text-black/80"
      >
        {isPosting ? "Processing..." : "Pay"}
      </button>
    </div>
  );
}

export default Payment