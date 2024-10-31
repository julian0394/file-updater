import { useDropzone } from 'react-dropzone'
import { MdCloudUpload } from 'react-icons/md'
import { fileStore } from '../../store/useStore'
import DragOverlay from '../DragOverlay'
import { twMerge } from 'tailwind-merge'
import { maxSizeInBytes } from '../../models/constants'

const FileUploader = () => {
  const { addFiles } = fileStore()
  const handleAddingItems = (acceptedFiles: File[]) => {
    addFiles(acceptedFiles)
  }

  const { getRootProps: getDropzoneProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    maxSize: maxSizeInBytes,
    onDrop: handleAddingItems,
    onDropRejected: (fileRejections) => {
      const errorFiles = fileRejections.map( rejected => rejected.file)
      handleAddingItems(errorFiles)
    }
  })

  return (
    <>
      <section className='mx-auto my-10 w-[80%] flex content-center items-center group'>
        <button
          className='flex min-h-60 w-full border-spacing-2 select-none flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-500/40 bg-slate-100 dark:bg-slate-700/30 text-slate-800 dark:text-slate-100 outline-none transition-colors duration-150 hover:border-slate-500/70 focus:border-slate-500 active:border-blue-500 z-30'
          {...getDropzoneProps()}
          aria-label='Drop zone'
        >
          <input {...getInputProps()} />
          <MdCloudUpload className={twMerge(`group-hover:scale-150 group-hover:text-blue-500 text-slate-400/80 dark:text-slate-300/50 transition-transform duration-200`, isDragActive ? 'animate-bounce text-8xl text-blue-500 dark:text-blue-500' : 'text-5xl')} />
          <div className='flex flex-col gap-1'>
            { isDragActive
              ?
              <div className='text-xl'>Yes! Drop it here!</div>
              :
              <>
                <span>
                  <b>Drop</b> items here or <b>click</b> to browse files
                </span>
                <span className='font-thin tracking-wide'>Max {maxSizeInBytes/1000}mb. Only pdf & png/jpg.</span>
              </>
            }
          </div>
        </button>
      </section>

      <DragOverlay open={isDragActive} />
    </>
  )
}

export default FileUploader
