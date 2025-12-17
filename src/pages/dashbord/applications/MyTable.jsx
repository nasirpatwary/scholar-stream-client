import { FaTrashCan } from "react-icons/fa6";
import { CiEdit } from 'react-icons/ci'
import { handleCustomFun } from "../../../utils/customToastify";
import { useDeleteApplication } from "../../../hooks/usemongodbCollections";
import { Link } from "react-router";
const MyTable = ({apply}) => {
  const {mutateAsync} = useDeleteApplication()
  const {
      universityName,
      scholarshipCategory,
      universityCity,
      feedback,
      applicationFees,
      applicationStatus,
      paymentStatus,
      _id
  } = apply || {}
  const handleRemoveApplication = (id) => {
    handleCustomFun(id, mutateAsync)
  }
  return (
     <tr>
        <td className="text-nowrap">{universityName}</td>
        <td className="text-nowrap">{scholarshipCategory}</td>
        <td className="text-nowrap">{universityCity}</td>
        <td className="text-nowrap">{applicationFees}</td>
        <td className="text-nowrap">{applicationStatus}</td>
        <td className="text-nowrap cursor-pointer"
        title={feedback}>{feedback.length > 11 ? feedback.slice(0, 11) : feedback}...</td>
        <td className="text-nowrap space-x-4">
          {applicationStatus === "pending" && 
         <> 
         <button 
          className="btn btn-square text-primary">
            <CiEdit size={24} />
        </button>
         <button
          onClick={() => handleRemoveApplication(_id)}
            className="btn btn-square text-red-500"
          >
            <FaTrashCan size={18} />
          </button>
        </>
          }
          {
          applicationStatus === "completed" && 
           <button 
            className="btn text-primary">
            Add Review
          </button>
        }
        {
        applicationStatus === "pending" && paymentStatus === "unpaid" &&
          <button 
            className="btn btn-square text-primary">
            <Link to={`/dashboard/payment/${_id}`}>
            Pay
            </Link>
        </button>
        }
        </td>
      </tr>
      
  )
}

export default MyTable