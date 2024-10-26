import { FaFileImage, FaFileLines } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import { fileStore } from '../../store/useStore'
import { Tooltip } from 'react-tooltip'
import { useAtom } from 'jotai'
import { themeAtom } from '../../store/atoms'

interface Props {
  file: File
}

const UploadedFileItem = ({ file }: Props) => {
  const { removeFile } = fileStore()
  const [ darkTheme ] = useAtom(themeAtom)
  
  return (
    <>
      <div
        className='flex flex-col justify-between w-[120px] h-28 rounded-md bg-slate-100 dark:bg-slate-600 shadow-md shadow-black/20'
        data-tooltip-id={`tooltip-${file.name}`}
        data-tooltip-content={file.name}
      >
        <div className='flex flex-col p-2 gap-2'>
          <button
            onClick={() => removeFile(file.name)}
            className='self-end bg-slate-200 dark:bg-slate-700/50 rounded-full'
            aria-label={`Delete file number ${file.name}`}
          >
            <IoMdCloseCircle className='text-slate-400' />
          </button>
          { file.type.startsWith('application')
            ? <FaFileLines className='self-center text-4xl text-slate-400' />
            : <FaFileImage className='self-center text-4xl text-slate-400' />
          }
          {/* { file.type.startsWith('image') &&
              <img src={URL.createObjectURL(file)} alt={file.name} className='w-full h-12 object-cover rounded-t-md' />
          } */}
        </div>
        <p className='truncate w-full bg-slate-300 dark:bg-slate-700 py-1 px-2 rounded-b-md text-slate-800 dark:text-slate-200 select-none'>
          {file.name}
        </p>
      </div>

      <Tooltip
        id={`tooltip-${file.name}`}
        clickable
        delayShow={500}
        border={`1px solid ${darkTheme ? '#1e293b' : '#94a3b8'}`}
        // border={darkTheme ? '1px solid #1e293b' : '1px solid #cbd5e1'}
        style={darkTheme 
          ? { backgroundColor: '#334155', color: '#e2e8f0', border: '2px solid #1e293b' }
          : { backgroundColor: '#cbd5e1', color: '#1e293b', border: '2px solid #1e293b' }
        }
        place='bottom'
      />
    </>
  )
}

export default UploadedFileItem
