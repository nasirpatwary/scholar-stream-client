import { FaTrashCan } from "react-icons/fa6"
import { handleCustomFun } from "../../../utils/customToastify"
import { useDeleteReview } from "../../../hooks/usemongodbCollections"
const TableReviews = ({ratingPoint, universityName, userName, userEmail, userImg, _id}) => {
    const {mutateAsync} = useDeleteReview()
    const handleRemoveReview = id =>{
        handleCustomFun(id, mutateAsync)
    }
  return (
         <tr>
            <td>
            <img
                referrerPolicy="no-referrer"
                className="size-10 object-center rounded-full"
                src={userImg}
                alt={userName}
            />
            </td>
              <td className="text-nowrap">{userName}</td>
              <td className="text-nowrap">{userEmail}</td>
              <td className="text-nowrap">{universityName}</td>
              <td className="text-nowrap">{ratingPoint}</td>
             <td className="space-x-4">
                <button
                onClick={() => handleRemoveReview(_id)}
                className="btn btn-square text-red-500">
                <FaTrashCan size={18} />
                </button>
             </td>
        </tr>
  )
}
export default TableReviews