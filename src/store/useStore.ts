import { create } from 'zustand'
import { CustomFileType } from '../models/types'
import openNotification from '../utils/openNotification'

type FileStore = {
  files: CustomFileType[]
  addFiles: (acceptedFiles: File[]) => void
  removeFile: (fileNameToRemove: string) => void
}

export const fileStore = create<FileStore>( set => ({
  files: [],
  addFiles: (newFiles) => set((state) => {
    const newFilesArray: CustomFileType[] = []
    
    newFiles.forEach( file => {
      // if(file.type !== 'application/pdf' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
      //   openNotification({
      //     message: 'Some files you tried to upload is not supported',
      //     id: 'notification-upload-error-noType',
      //     status: 'error',
      //     duration: 3000
      //   })
      //   return
      // }

      const currentId = `${file.name}_${file.size}`
      const isDuplicate = state.files.some( item => item.id === currentId )
      if (isDuplicate) {
        openNotification({
          message: newFiles.length > 1
            ? "Some duplicated files have been ignored. If others weren't, they were uploaded"
            : 'This file has already been uploaded',
          id: 'notification-upload-warning-duplicated',
          status: newFiles.length > 1 ? 'warning' : 'error',
          duration: newFiles.length > 1 ? 5000 : 3000
        })
      } else {
        const newFile: CustomFileType = {
          file,
          id: `${file.name}_${file.size}`,
          uploadStatus: 'idle',
          uploadProcess: 0
        }
        newFilesArray.push(newFile)
        openNotification({ 
          message: 'The files habe been uploaded successfully',
          status: 'success',
          id: 'notification-upload-success',
          duration: 1500
        })
      }
    })
    
    return { files: [...state.files, ...newFilesArray] }
  }),
  removeFile: (fileNameToRemove) => set((state) => {
    return { files: state.files.filter( item => item.file.name !== fileNameToRemove ) }
  })
}))
