import { useForm } from "react-hook-form";
import DetailsModal from "../../../components/modals/DetailsModal";
import { SelectInput } from "../../../forms/SelectInput";
import toast from "react-hot-toast";
import clsx from "clsx";
import FeedBackModal from "../../../components/modals/FeedBackModal";
import { useUpateStatus } from "../../../hooks/usemongodbCollections";
import { handleRejected } from "../../../utils/customToastify";
const ManageTable = ({apply}) => {
 const {mutateAsync} = useUpateStatus()
  const {
      userName,
      userEmail,
      universityCity,
      feedback,
      applicationStatus,
      paymentStatus,
      _id
  } = apply || {}
  const { control, handleSubmit } = useForm({
    defaultValues: {
     applicationStatus
    },
  });
    const onSubmit = async (data) => {
      if (data.applicationStatus === "") {
        return toast.error("No role selected please select a status")
      }
      const updateDoc = {applicationStatus: data.applicationStatus, id: _id}
      await mutateAsync(updateDoc)
    };

  const handleRejectedAplications = async (id) =>{
      const updateDoc = {applicationStatus: "rejected", id}
      handleRejected(updateDoc, mutateAsync)
  }  
  return (
     <tr>
        <td className="text-nowrap">{userName}</td>
        <td className="text-nowrap">{userEmail}</td>
        <td className="text-nowrap">{universityCity}</td>
        <td className="text-nowrap cursor-pointer"
        title={feedback}>{feedback.length > 11 ? feedback.slice(0, 11) : feedback}...</td>
        <td className="text-nowrap">
        <span
            className={clsx("badge", {
            "badge-dash badge-accent": applicationStatus === "completed",
            "badge-dash badge-warning":
            applicationStatus === "pending",
            "badge-dash badge-error": applicationStatus === "rejected",
            })}
        >
            {applicationStatus}
        </span>
        </td>
        <td className="text-nowrap">{paymentStatus}</td>
        <td className="text-nowrap space-x-4">
        <DetailsModal id={_id} />
        <FeedBackModal feedback={feedback} id={_id} />
        <button>
          <form onChange={handleSubmit(onSubmit)}>
          <SelectInput
            id="applicationStatus"
            name="applicationStatus"
            control={control}
            options={[
                { value: "pending", label: "Pending" },
                { value: "completed", label: "Completed" },
            ]}
          />
        </form>
        </button>
        <button 
        onClick={() => handleRejectedAplications(_id)}
        className="btn text-primary">Cancel</button>
        </td>
      </tr>
      
  )
}

export default ManageTable