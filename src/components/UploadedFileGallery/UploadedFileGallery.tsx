import { fileStore } from '../../store/useStore'
import UploadedFileItem from './UploadedFileItem'

interface Props {}

const UploadedFileGallery = ({}: Props) => {
  const { files } = fileStore()
  
  return (
    <section className='flex items-start flex-wrap justify-start gap-4 w-[80%] mx-auto'>
      { files.map( item => (
          <UploadedFileItem key={item.file.size + crypto.randomUUID()} file={item.file} />
        ))
      }  
    </section>
  )
}

export default UploadedFileGallery
