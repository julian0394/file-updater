import { twMerge } from 'tailwind-merge'
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

type Status = 'success' | 'error' | 'info' | 'warning'

interface Props {
  title?: string
  message: string
  status: Status
  id?: string
  duration?: number
}

function getGenericTitle(status: Status) {
  switch (status) {
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

const openNotification = ({ title, message, status, id = `notification-${crypto.randomUUID()}`, duration = 3000 }: Props) => { 
  toast(
    <div className='flex flex-col'>
      <span className='font-bold'>{title ?? getGenericTitle(status)}</span>
      <span>{message}</span>
    </div>
    , {
      toastId: id,
      type: status,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      className: () => (
        twMerge(
          'relative flex lg:w-96 p-2 border rounded-md shadow-md justify-between overflow-hidden cursor-pointer shadow-md',
          status === 'success' && 'bg-emerald-100 text-emerald-800 border-emerald-800 shadow-emerald-800/50',
          status === 'error' && 'bg-rose-100 text-rose-800 border-rose-800 shadow-rose-800/50',
          status === 'warning' && 'bg-amber-100 text-amber-800 border-amber-800 shadow-amber-800/50',
          status === 'info' && 'bg-blue-100 text-sky-800 border-sky-800 shadow-sky-800/50'
        )
      ),
    }
  )
}

export default openNotification

// const openNotification = ({ title, message, status, id = `notification-${crypto.randomUUID()}`, duration = 2000 }: Props) => {
//   toast.custom(
//     <div className={
//       twMerge(
//         'flex flex-col items-start w-96 py-2 px-4 border-2 rounded-md shadow-lg',
//           status === 'success' && 'bg-emerald-200 text-emerald-800 border-emerald-800',
//           status === 'error' && 'bg-rose-200 text-rose-800 border-rose-800',
//           status === 'warning' && 'bg-amber-200 text-amber-800 border-amber-800',
//           status === 'info' && 'bg-blue-200 text-sky-800 border-sky-800'
//       )
//     }>
//       <button onClick={() => toast.dismiss(id)} className='self-end'>
//         <IoMdCloseCircle />
//       </button>
//       <div className='flex gap-2'>
//         <span className='mt-1'>{getIcon(status)}</span>
//         <div className='flex flex-col'>
//           <span className='font-bold'>{title ?? getGenericTitle(status)}</span>
//           <span>{message}</span>
//         </div>
//       </div>
//     </div>, 
//     {
//       duration: duration,
//       id: id
//     }
//   )
// }
