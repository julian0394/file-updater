import { create } from 'zustand'
import { CustomFileType } from '../models/types'
import openNotification from '../utils/openNotification'
import { maxSizeInBytes } from '../models/constants'

type FileStore = {
  files: CustomFileType[]
  addFiles: (acceptedFiles: File[]) => void
  removeFile: (idToRemove: string) => void
}

export const fileStore = create<FileStore>(set => ({
  files: [],
  addFiles: (newFiles) => set((state) => {
    const newFilesArray: CustomFileType[] = []

    newFiles.forEach( file => {
      let newFile: CustomFileType = {
        file,
        id: `${file.name}_${file.size}-ok`,
        uploadStatus: 'idle',
        uploadProcess: 0,
        status: 'ok',
      }

      const currentId = `${file.name}_${file.size}-ok`
      const isDuplicate = state.files.some( item => item.id === currentId)
      if (isDuplicate) {
        newFile = { ...newFile, status: 'duplicatedError', id: `${currentId}-duplicatedError` }
      }

      else if (file.type !== 'application/pdf' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
        newFile = { ...newFile, status: 'typeError' }
      }

      else if (file.size > maxSizeInBytes) {
        newFile = { ...newFile, status: 'singleSizeError' }
      }

      else {
        openNotification({
          message: 'The files have been uploaded successfully',
          uploadStatus: 'success',
          id: 'notification-upload-success',
          duration: 2000,
        })
      }

      newFilesArray.push(newFile)
    })

    return { files: [...state.files, ...newFilesArray] }
  }),
  removeFile: (idToRemove) => set((state) => {
    return { files: state.files.filter(item => item.id !== idToRemove) }
  })
}))
