import { create,  } from 'zustand'
import { CustomFileType } from '../models/types'

type FileStore = {
  files: CustomFileType[]
  addFiles: (acceptedFiles: File[]) => void
}

export const fileStore = create<FileStore>( set => ({
  files: [],
  addFiles: (newFiles) => set((state) => {
    const newFilesArray: CustomFileType[] = []
    
    newFiles.forEach( file => {
      const currentId = `${file.name}${file.size}`
      const isDuplicate = state.files.some( item => item.id === currentId )
      if (isDuplicate) {
        console.log('se han omitido archivosrepetidos')
      } else {
        const newFile: CustomFileType = {
          file,
          id: `${file.name}${file.size}`,
          uploadStatus: 'idle',
          uploadProcess: 0
        }
        newFilesArray.push(newFile);
      }
    })

    return { files: [...state.files, ...newFilesArray] }
  })
}))
