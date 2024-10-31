import { useEffect, useState } from 'react'
import { fileStore } from '../../store/useStore'

interface Props {
  id: string
  hasAnyError: boolean
}

export const useCountdown = ({ id, hasAnyError }: Props) => {
  const [countdown, setCountdown] = useState(5)
  const { removeFile } = fileStore()

  useEffect(() => {
    if (countdown <= 0) {
      removeFile(id)
      return
    }

    const timer = setInterval(() => {
      if (hasAnyError) {
        setCountdown(prev => prev - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  return { countdown }
}
