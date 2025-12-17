import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { useForm } from 'react-hook-form'
import ReusableInput from '../../forms/ReusableInput'
import ReusableTextarea from '../../forms/ReusableTextarea'
import { useUpdateReviews } from '../../hooks/usemongodbCollections'
const UpdateReview = ({review}) => {
  const {mutateAsync} = useUpdateReviews()
  const {ratingPoint, reviewComment, _id} = review || {}
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
  } = useForm({
    defaultValues: {ratingPoint, reviewComment, id: _id}
  });

  const onSubmit = async (data) => {
   await mutateAsync(data)
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

export default UpdateReview