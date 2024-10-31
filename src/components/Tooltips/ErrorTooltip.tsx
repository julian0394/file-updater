import { Tooltip } from 'react-tooltip'
import { FileStatus } from '../../models/types'
import { useGetStyles } from './useGetTooltipStyle'

interface Props {
  id: string
  status: FileStatus
  isOpen: boolean
}

const ErrorTooltip = ({ id, status, isOpen }: Props) => {
  const { getStyles } = useGetStyles(status)

  return (
    <Tooltip
      id={id}
      style={getStyles()}
      place='bottom'
      isOpen={isOpen}
    />
  )
}

export default ErrorTooltip
