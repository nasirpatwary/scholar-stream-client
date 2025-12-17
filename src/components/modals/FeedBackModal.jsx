import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateFeedBack } from '../../hooks/usemongodbCollections'
import ReusableTextarea from '../../forms/ReusableTextarea'
const FeedBackModal = ({feedback, id}) => {
  const {mutateAsync} = useUpdateFeedBack()
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
    defaultValues: {
      feedback
    },
  });

  const onSubmit = async (data) => {
    const updateDoc = {feedback: data.feedback, id}
    await mutateAsync(updateDoc)
  };
  return (
    <>
    <button 
    onClick={open}
    className="btn text-primary">
        Feedback
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
                <ReusableTextarea
                name="feedback"
                label="Application Feedback"
                control={control}
                placeholder="Write feedback here..."
              />
              <div className="mt-4 text-end">
                <Button
                type="submit"
                  className="btn-primary"
                  onClick={close}
                >
                 Submit FeedBack
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
export default FeedBackModal