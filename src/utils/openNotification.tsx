import { twMerge } from 'tailwind-merge'
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type UploadStatus = 'success' | 'error' | 'info' | 'warning'

interface Props {
  title?: string
  message: string
  uploadStatus: UploadStatus
  id?: string
  duration?: number
}

function getGenericTitle(uploadStatus: UploadStatus) {
  switch (uploadStatus) {
    case 'success':
      return 'Success!'
    case 'error':
      return 'Error:'
    case 'warning':
      return 'Warning:'
    case 'info':
      return 'Information:'
    default:
      return ''
  }
}

const openNotification = ({ title, message, uploadStatus, id = `notification-${crypto.randomUUID()}`, duration = 3000 }: Props) => { 
  toast(
    <div className='flex flex-col'>
      <span className='font-bold'>{title ?? getGenericTitle(uploadStatus)}</span>
      <span>{message}</span>
    </div>
    , {
      toastId: id,
      type: uploadStatus,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      className: () => (
        twMerge(
          'relative flex lg:w-96 p-2 border rounded-md shadow-md justify-between overflow-hidden cursor-pointer shadow-md',
          uploadStatus === 'success' && 'bg-emerald-100 text-emerald-800 border-emerald-800 shadow-emerald-800/50',
          uploadStatus === 'error' && 'bg-rose-100 text-rose-800 border-rose-800 shadow-rose-800/50',
          uploadStatus === 'warning' && 'bg-amber-100 text-amber-800 border-amber-800 shadow-amber-800/50',
          uploadStatus === 'info' && 'bg-blue-100 text-sky-800 border-sky-800 shadow-sky-800/50'
        )
      ),
    }
  )
}

export default openNotification
