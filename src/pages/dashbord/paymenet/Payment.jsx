import { useParams } from "react-router";
import { useGetApplicationsById } from "../../../hooks/usemongodbCollections";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
const Payment = () => {
    const {applyId} = useParams()
    const [application, isLoading, isError] = useGetApplicationsById(applyId)
    if(isLoading) return <LoadingSpinner />
    if(isError) return <ErrorPage />
 console.log(application)
  return (
    <div>
      <h2></h2>
      <button
        // onClick={handlePostPayment}
          className="btn btn-sm btn-primary text-black/80"
        >
          {/* {isPending ? "Procesing.." : "Pay"} */}
          Pay
        </button>
    </div>
  );
}

export default Payment