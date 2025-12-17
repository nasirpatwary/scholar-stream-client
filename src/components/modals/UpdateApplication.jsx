import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiEdit } from 'react-icons/ci'
import ReusableInput from '../../forms/ReusableInput'
import DatePicker from 'react-datepicker'
import ReusableSelect from '../../forms/ReusableSelect'
import { useUpdateAplications } from '../../hooks/usemongodbCollections'

const UpdateAplicaction = ({apply}) => {
  const {mutateAsync} = useUpdateAplications()
  const {
        applicationDate,
        applicationFees,
        applicationStatus,
        degree,
        feedback,
        paymentStatus,
        scholarshipCategory,
        serviceCharge,
        universityCity,
        universityName,
        _id
} = apply || {}
  const [isOpen, setIsOpen] = useState(false)
  const [applyDate, setApplyDate] = useState(() => {
    const parsed = new Date(applicationDate);
    return isNaN(parsed) ? new Date() : parsed;
  });

  const open = ()  =>{
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
    applicationDate,
    applicationFees,
    applicationStatus,
    degree,
    feedback,
    paymentStatus,
    scholarshipCategory,
    serviceCharge,
    universityCity,
    universityName,
    id: _id
    },
  });

  const onSubmit = async (data) => {
   await mutateAsync({...data, applyDate})
  };
  return (
    <>
      <button 
      onClick={open}
      className="btn btn-square text-primary">
        <CiEdit size={24} />
     </button>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-2xl max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium">
                Applications update successful
              </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">

            {/* University Name */}
            <ReusableInput
            name="universityName"
            label="University Name"
            control={control}
            placeholder="Enter university name"
            rules={{ required: "University name is required" }}
            />

            {/* University City */}
            <ReusableInput
            name="universityCity"
            label="University City"
            control={control}
            placeholder="Enter university city"
            rules={{ required: "City is required" }}
            />

            {/* Degree */}
            <ReusableSelect
            name="degree"
            label="Degree"
            control={control}
            rules={{ required: "Degree is required" }}
            options={[
            { label: "Bachelor", value: "bachelor" },
            { label: "Masters", value: "masters" },
            { label: "PhD", value: "phd" },
            ]}
            />

            {/* Scholarship Category */}
            <ReusableSelect
            name="scholarshipCategory"
            label="Scholarship Category"
            control={control}
            rules={{ required: "Scholarship category is required" }}
            options={[
            { label: "Full Fund", value: "full-fund" },
            { label: "Partial Fund", value: "partial-fund" },
            { label: "Self Fund", value: "self-fund" },
            ]}
            />

            {/* Application Fees */}
            <ReusableInput
            name="applicationFees"
            label="Application Fees"
            type="number"
            control={control}
            placeholder="Enter application fees"
            rules={{ required: "Application fee is required" }}
            />

            {/* Service Charge */}
            <ReusableInput
            name="serviceCharge"
            label="Service Charge"
            type="number"
            control={control}
            placeholder="Enter service charge"
            rules={{ required: "Service charge is required" }}
            />

            {/* Application Date */}
            <div className="flex flex-col">
            <label className="label">Application Date</label>
            <DatePicker
            className="input-field border border-gray-300"
            selected={applicationDate}
            dateFormat="yyyy-MM-dd"
            placeholderText="yyyy-mm-dd"
            onChange={(date) => setApplyDate(date)}
            />
            </div>
            <div className="mt-4 text-end">
            <Button 
            onClick={close}
            type="submit" className="btn-primary">
            Submit Application
            </Button>
            </div>

            </form>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}



export default UpdateAplicaction