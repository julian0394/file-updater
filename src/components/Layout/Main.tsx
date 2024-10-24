import FileUploader from '../FileUploader/FileUploader'
import UploadedFileGallery from '../UploadedFileGallery/UploadedFileGallery'

interface Props {}

const Main = ({}: Props) => {  
  return (
    <main className='w-full flex-1 bg-slate-800 p-5'>
      <h1 className='text-center text-2xl font-bold tracking-wide text-slate-100'>Upload a file!</h1>
      <h2 className='text-center text-lg font-thin tracking-wide text-slate-100'>Nothing will actually be uploaded ;)</h2>
      <FileUploader />
      <UploadedFileGallery />
    </main>
  )
}

export default Main
