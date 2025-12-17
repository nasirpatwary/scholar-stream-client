import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiEdit } from 'react-icons/ci'
import ReusableInput from '../../forms/ReusableInput'
import DatePicker from 'react-datepicker'
import { usePatchScholarship } from '../../hooks/usemongodbCollections'

const ModalsComponent = ({scholarship}) => {
  const { postedUserEmail, applicationFees, serviceCharge, scholarshipPostDate, applicationDeadline, _id } = scholarship || {}
  const [isOpen, setIsOpen] = useState(false)
  const {mutateAsync} = usePatchScholarship()
  const [deadline, setDeadline] = useState(() => {
    const parsed = new Date(applicationDeadline);
    return isNaN(parsed) ? new Date() : parsed;
  });
  const [postDate, setPostDate] = useState(() => {
    const parsed = new Date(scholarshipPostDate);
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
      postedUserEmail,
      applicationFees, 
      serviceCharge
    },
  });

  const onSubmit = async (data) => {
  await mutateAsync({...data, applicationDeadline: deadline, scholarshipPostDate: postDate, id: _id})

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
                Scholarship update successful
              </DialogTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                 <ReusableInput
                  readOnly={true}
                    name="postedUserEmail"
                    label="Posted User Email"
                    control={control}
                    disabled
                  />
                <ReusableInput
                name="applicationFees"
                label="Application Fees"
                type="number"
                control={control}
                placeholder="Application Fees"
                rules={{ required: "Application fee is required" }}
              />

              <ReusableInput
                name="serviceCharge"
                label="Service Charge"
                type="number"
                control={control}
                placeholder="Service Charge"
                rules={{ required: "Service charge is required" }}
              />
                <div className="flex flex-col">
                  <label className="label">
                  PostDate
                  </label>
                  <DatePicker
                    className="input-field border border-gray-300"
                    selected={postDate}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="yyyy-mm-dd"
                    onChange={(date) => setPostDate(date)}
                  />
                  </div>
              <div className="flex flex-col">
                <label className="label">
                Deadline
                </label>
                <DatePicker
                  className="input-field border border-gray-300"
                  selected={deadline}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="yyyy-mm-dd"
                  onChange={(date) => setDeadline(date)}
                />
                </div>
              <div className="mt-4 text-end">
                <Button
                type="submit"
                  className="btn-primary"
                  onClick={close}
                >
                  Got it, thanks!
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



export default ModalsComponent