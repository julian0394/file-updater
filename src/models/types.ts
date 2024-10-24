export type CustomFileType = {
  file: File,
  id: string,
  uploadProcess: number,
  uploadStatus: 'idle' | 'pending' | 'error' | 'success'
}
