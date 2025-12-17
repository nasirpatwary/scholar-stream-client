import {format} from "date-fns"
import { FaTrashCan } from "react-icons/fa6";
const ScholarshipsTable = ({scholarship}) => {
  const {postedUserEmail, applicationFees, serviceCharge, scholarshipPostDate, applicationDeadline, _id} = scholarship || {}
  return (
     <tr>
        <td className="text-nowrap">{applicationFees}</td>
        <td className="text-nowrap">{serviceCharge}</td>
        <td className="text-nowrap">{format(new Date(scholarshipPostDate), "P")}</td>
        <td className="text-nowrap">{format(new Date(applicationDeadline), "P")}</td>
        <td className="text-nowrap">{postedUserEmail}</td>
        <td className="text-nowrap space-x-4">
          <button
            className="btn btn-square text-red-500"
          >
            <FaTrashCan size={18} />
          </button>
        </td>
      </tr>
      
  )
}

export default ScholarshipsTable