import { useDropzone } from 'react-dropzone'
import { MdCloudUpload } from 'react-icons/md'
import { fileStore } from '../../store/useStore'
import DragOverlay from '../DragOverlay'
import { twMerge } from 'tailwind-merge'

interface Props {}

const FileUploader = ({}: Props) => {
  const { addFiles } = fileStore()
  const handleDropItem = (acceptedFiles: File[]) => {
    addFiles(acceptedFiles)
  }

  const { getRootProps: getDropzoneProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    // maxSize: 100_000_000, // bytes = 100 mb
    maxSize: 500_000, // bytes = 5 mb
    onDrop: handleDropItem,
    // onDropRejected: (fileRejections) => {
    //   console.log(fileRejections)
    //   const setErrorMessage = (): string => {
    //     if(fileRejections[0].errors[0].code === 'file-invalid-type') {
    //       return 'Some file type is not supported'
    //     } else if (fileRejections[0].errors[0].code === 'file-too-large') {
    //       return 'Some file exceeds the total size limit'
    //     } else {
    //       return 'Something went wrong'
    //     }
    //   }
    //   openNotification({
    //     message: setErrorMessage(),
    //     id: 'notification-upload-error-rejected',
    //     status: 'error',
    //     duration: 5000
    //   })
    // }
  })

  return (
    <>
      <section className='mx-auto my-10 w-[80%] flex content-center items-center'>
        <button
          className='flex min-h-60 w-full border-spacing-2 select-none flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-500/40 bg-slate-100 dark:bg-slate-700/30 text-slate-800 dark:text-slate-100 outline-none transition-colors duration-150 hover:border-slate-500/70 focus:border-slate-500 active:border-slate-500 z-30'
          {...getDropzoneProps()}
          aria-label='Drop zone'
        >
          <input {...getInputProps()} />
          <MdCloudUpload className={twMerge(` text-slate-400/80 dark:text-slate-300/50 transition-transform duration-200`, isDragActive ? 'animate-bounce text-8xl' : 'text-5xl')} />
          <div className='flex flex-col gap-1'>
            { isDragActive
              ?
              <div className='text-xl'>Yes! Drop it here!</div>
              :
              <>
                <span>
                  <b>Drop</b> items here or <b>click</b> to browse files
                </span>
                <span className='font-thin tracking-wide'>Max 1gb. Only pdf & png/jpg.</span>
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
