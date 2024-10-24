import { useDropzone } from 'react-dropzone'
import { MdCloudUpload } from 'react-icons/md'
import { fileStore } from '../../store/useStore'

interface Props {}

const FileUploader = ({}: Props) => {
  const { addFiles } = fileStore()
  const handleDropItem = (acceptedFiles: File[]) => {
    addFiles(acceptedFiles)
  }

  const { getRootProps: getDropzoneProps, getInputProps } = useDropzone({
    onDrop: handleDropItem,
    maxSize: 100_000_000 // bytes = 100 mb
  })

  return (
    <section className='mx-auto my-10 flex w-[80%] content-center items-center'>
      <button
        className='flex min-h-60 w-full border-spacing-2 select-none flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-500/40 bg-slate-700/30 text-slate-100 outline-none transition-colors duration-150 hover:border-slate-500/70 focus:border-slate-500 active:border-slate-500'
        {...getDropzoneProps()}
        aria-label='Drop zone'
      >
        <input {...getInputProps()} />
        <MdCloudUpload className='text-5xl text-slate-300/50' />
        <div className='flex flex-col gap-1'>
          <span>
            <b>Drop</b> items here or <b>click</b> to browse files
          </span>
          <span className='font-thin tracking-wide'>Max 1gb</span>
        </div>
      </button>
    </section>
  )
}

export default FileUploader
