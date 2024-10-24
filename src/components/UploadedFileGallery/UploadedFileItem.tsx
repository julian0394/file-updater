import { FaFile } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'

interface Props {
  file: File
}

const UploadedFileItem = ({ file }: Props) => {
  return (
    <div className='flex flex-col justify-between w-[120px] h-28 rounded-md bg-slate-600'>
      <div className='flex flex-col p-2 gap-2'>
        <button className='self-end bg-slate-700/50 rounded-full'>
          <IoMdCloseCircle className='text-slate-400' />
        </button>
        <FaFile className='self-center text-4xl text-slate-400' />
      </div>
      <div className='truncate w-full bg-slate-700 py-1 px-2 rounded-b-md text-slate-200'>
        {file.name}
      </div>
    </div>
  )
}

export default UploadedFileItem
