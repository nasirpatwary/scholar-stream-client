import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { useForm } from 'react-hook-form'
import ReusableInput from '../../forms/ReusableInput'
import Input from '../../forms/Input'
import uploadToImageBB from '../../utils/uploadToImageBB'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
const UpdateProfile = () => {
  const {createUserProfile} = useAuth()
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
  } = useForm({});

  const onSubmit = async (data) => {
   const imgURL = await uploadToImageBB(data.photo);
     await createUserProfile(data.name, imgURL);
      toast.success("updated successfully!")
  };
  return (
    <>
    <CiEdit className='cursor-pointer' onClick={open} size={30} />
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-2xl max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium">
                Update Profile
              </DialogTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                 <ReusableInput
                    name="name"
                    label="Name"
                    control={control}
                    placeholder="Your Name"
                    rules={{ required: "Name is required" }}
                    />
                <Input
                name="photo"
                type="file"
                label="Photo URL"
                control={control}
                placeholder="Enter your photo url.."
                rules={{ required: "Photo url is required" }}
                />
              <div className="mt-4 text-end">
                <Button
                type="submit"
                  className="btn-primary"
                  onClick={close}
                >
                Submit 
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

export default UpdateProfile