import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useGetApplicationsById } from '../../hooks/usemongodbCollections'
import LoadingSpinner from '../../shared/LoadingSpinner'
import ErrorPage from '../../pages/ErrorPage'
import { format } from 'date-fns'
const DetailsModal = ({id}) => {
const [application, isLoading, isError] = useGetApplicationsById(id)
const [isOpen, setIsOpen] = useState(false)
if(isLoading) return <LoadingSpinner />
if(isError) return <ErrorPage />
const {
  applicationDate,
  applicationFees,
  applicationStatus,
  degree,
  feedback,
  scholarshipCategory,
  serviceCharge,
  universityCity,
  universityName,
  userEmail,
  userName
} = application || {}

  const open = ()  =>{
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }
  return (
    <>
     <button 
        onClick={open}
        className="btn text-primary">
            Details
        </button>
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4">
    <DialogPanel
  transition
  className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-2xl"
>
  <DialogTitle
    as="h3"
    className="text-lg font-semibold text-center mb-4"
  >
    Application Details
  </DialogTitle>

  <div className="space-y-2 text-sm">
    <p><span className="font-semibold">Student Name:</span> {userName}</p>
    <p><span className="font-semibold">Email:</span> {userEmail}</p>

    <hr />

    <p><span className="font-semibold">University:</span> {universityName}</p>
    <p><span className="font-semibold">City:</span> {universityCity}</p>

    <p><span className="font-semibold">Degree:</span> {degree}</p>
    <p><span className="font-semibold">Subject:</span> {scholarshipCategory}</p>

    <hr />

    <p><span className="font-semibold">Application Fees:</span> {applicationFees}</p>
    <p><span className="font-semibold">Service Charge:</span> {serviceCharge}</p>

    <p>
      <span className="font-semibold">Status:</span>
      <span className={`ml-2 badge ${
        applicationStatus === "pending"
          ? "badge-warning"
          : "badge-success"
      }`}>
        {applicationStatus}
      </span>
    </p>

    <p>
      <span className="font-semibold">Applied On:</span>{" "}
      {format(new Date(applicationDate), "P")}
    </p>
    <p>{feedback}</p>
    </div>

  <div className="mt-6 text-center">
    <button onClick={close} className="btn-primary">
      Close
    </button>
  </div>
</DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}



export default DetailsModal