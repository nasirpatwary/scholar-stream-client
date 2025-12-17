import {format} from "date-fns"
import { FaTrashCan } from "react-icons/fa6";
import { useDeleteScholarship } from "../../../hooks/usemongodbCollections";
import ModalsComponent from "../../../components/modals/ModalsComponent";
import { handleCustomFun } from "../../../utils/customToastify";
const ScholarshipsTable = ({scholarship}) => {
  const {mutateAsync} = useDeleteScholarship()
  const {postedUserEmail, applicationFees, serviceCharge, scholarshipPostDate, applicationDeadline, _id} = scholarship || {}
  const handleRemoveScholoarship = (id) => {
    handleCustomFun(id, mutateAsync )
  }
  return (
     <tr>
        <td className="text-nowrap">{applicationFees}</td>
        <td className="text-nowrap">{serviceCharge}</td>
        <td className="text-nowrap">{format(new Date(scholarshipPostDate), "P")}</td>
        <td className="text-nowrap">{format(new Date(applicationDeadline), "P")}</td>
        <td className="text-nowrap">{postedUserEmail}</td>
        <td className="text-nowrap space-x-4">
          <ModalsComponent scholarship={scholarship} />
          <button
            onClick={() => handleRemoveScholoarship(_id)}
            className="btn btn-square text-red-500"
          >
            <FaTrashCan size={18} />
          </button>
        </td>
      </tr>
      
  )
}

export default ScholarshipsTable