import { useAtom } from "jotai"
import { themeAtom } from "../../store/atoms"
import { FileStatus } from "../../models/types"

export function useGetStyles(status: FileStatus) {
  const [ darkTheme ] = useAtom(themeAtom)
  
  function getStyles() {
    if(status === 'typeError' || status === 'singleSizeError' || status === 'generalSizeError') {
      return {
        backgroundColor: '#f87171',
        color: '#1e293b',
      }
    }
    else {
      return {
        backgroundColor: darkTheme ? '#fbbf24' : '#f59e0b ',
        color: '#1e293b',
      }
    }
  }

  return { getStyles }
}
