import { TypeError } from '../../models/types'

export function getErrorTitle(error: TypeError) {
  switch (error) {
    case 'typeError':
      return 'Invalid file type'
    case 'singleSizeError':
      return 'File too large'
    case 'generalSizeError':
      return 'Total size exceeded'
    case 'duplicatedError':
      return 'Duplicated file'
    default:
      return 'Unknown error'
  }
}
