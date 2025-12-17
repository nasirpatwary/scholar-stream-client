import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReusableInput from '../../forms/ReusableInput'
import ReusableTextarea from '../../forms/ReusableTextarea'
import useAuth from '../../hooks/useAuth'
import { useReviewPosted } from '../../hooks/usemongodbCollections'
import { useNavigate } from 'react-router'
const AddReviewModal = ({apply}) => {
  const navigate = useNavigate()
  const {user} = useAuth()
  const {mutateAsync} = useReviewPosted()
  const { scholarshipId, universityName, userName, userEmail } = apply || {}
  const [isOpen, setIsOpen] = useState(false)

  const open = ()  =>{
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }
  const {
    control,
    handleSubmit,
    reset
  } = useForm({

  });

  const onSubmit = async (data) => {
     await mutateAsync({...data, scholarshipId, universityName, userName, userEmail, userImg: user?.photoURL})
     reset()
     navigate("/dashboard/myReviews")
  };
  return (
    <>
    <button 
    onClick={open}
    className="btn text-primary">
        Add Review
    </button>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-2xl max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium">
                FeedBack moderator
              </DialogTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                 <ReusableInput
                    name="ratingPoint"
                    label="Rating Point"
                    type="number"
                    control={control}
                    placeholder="Rating 1-5 Point"
                    rules={{ required: "Rating Point is required" }}
                    />
                
                 <ReusableTextarea
                   name="reviewComment"
                    label="Review Comment"
                    type="text"
                    control={control}
                    placeholder="Review Comment"
                    rules={{ required: "Review Comment is required" }}
                />
              <div className="mt-4 text-end">
                <Button
                type="submit"
                  className="btn-primary"
                  onClick={close}
                >
                 Review Submit 
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

export default AddReviewModal