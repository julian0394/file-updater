import { fileStore } from '../../store/useStore'
import UploadedFileItem from './UploadedFileItem'

const UploadedFileGallery = () => {
  const { files } = fileStore()
  
  return (
    <section className='flex items-start flex-wrap justify-start gap-4 w-[80%] mx-auto'>
      { files.map( item => (
          <UploadedFileItem key={item.file.size + crypto.randomUUID()} file={item} />
        ))
      }  
    </section>
  )
}

export default UploadedFileGallery
