import { FaFileImage, FaFileLines } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import { fileStore } from '../../store/useStore'
import { twMerge } from 'tailwind-merge'
import { CustomFileType } from '../../models/types'
import { useCountdown } from './useCountdown'
import ErrorTooltip from '../Tooltips/ErrorTooltip'
import { getErrorTitle } from './getErrorTitle'
import CustomTooltip from '../Tooltips/CustomTooltip'

interface Props {
  file: CustomFileType
}

const UploadedFileItem = ({ file }: Props) => {
  const { removeFile } = fileStore()
  const { status, id, file: fileData } = file

  const isDuplicated = status === 'duplicatedError'
  const hasError = status === 'typeError' || status === 'singleSizeError' || status === 'generalSizeError'
  const hasAnyError = isDuplicated || hasError
  const tooltipId = `tooltip-${fileData.name}_${fileData.size}-${status}`

  const { countdown } = useCountdown({ id, hasAnyError })
  
  return (
    <>
      <div
        className={twMerge(
          'flex flex-col justify-between w-48 h-28 rounded-md bg-slate-100 dark:bg-slate-600 shadow-md shadow-black/20',
          isDuplicated && 'ring-2 ring-amber-500 dark:ring-amber-400/90 shadow-md shadow-amber-400 dark:shadow-amber-400',
          hasError && 'ring-2 ring-red-400 dark:ring-red-500 shadow-md shadow-red-500 dark:shadow-red-400'
        )}
        data-tooltip-id={tooltipId}
        data-tooltip-content={hasAnyError ? `Will be deleted in ${countdown}s` : fileData.name}
      >
        <div className='flex flex-col p-2 gap-2'>
          <button
            onClick={() => removeFile(id)}
            className='self-end bg-slate-200 dark:bg-slate-700/50 rounded-full'
            aria-label={`Delete file number ${fileData.name}`}
          >
            { !hasAnyError && <IoMdCloseCircle className='text-slate-400' /> }
          </button>
          { fileData.type.startsWith('application')
            ? <FaFileLines className='self-center text-4xl text-slate-400' />
            : <FaFileImage className='self-center text-4xl text-slate-400' />
          }
        </div>
        <p className='truncate w-full bg-slate-300 dark:bg-slate-700 py-1 px-2 rounded-b-md text-slate-800 dark:text-slate-200 select-none'>
          {hasAnyError ? <i>{getErrorTitle(status)}</i> : fileData.name}
        </p>
      </div>

      <CustomTooltip
        id={tooltipId}
        clickable
        hidden={hasAnyError}
      />
      <ErrorTooltip
        id={tooltipId}
        isOpen={hasAnyError}
        status={status}
      />
    </>
  )
}

export default UploadedFileItem
