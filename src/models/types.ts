export type TypeError = 'typeError' | 'singleSizeError' | 'generalSizeError' | 'duplicatedError'

export type FileStatus = 'ok' | TypeError

export type CustomFileType = {
  file: File,
  id: string,
  uploadProcess: number,
  uploadStatus: 'idle' | 'pending' | 'error' | 'success',
  status: FileStatus,
}
