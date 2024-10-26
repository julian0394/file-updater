import FileUploader from '../FileUploader/FileUploader'
import UploadedFileGallery from '../UploadedFileGallery/UploadedFileGallery'

interface Props {}

const Main = ({}: Props) => {  
  return (
    <main className='w-full flex-1 p-5 text-center bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-150'>
      <h1 className='text-2xl font-bold tracking-wide'>Upload a file!</h1>
      <h2 className='text-lg font-thin tracking-wide'>Nothing will actually be uploaded ;)</h2>
      <FileUploader />
      <UploadedFileGallery />
    </main>
  )
}

export default Main
