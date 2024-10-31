import { useAtom } from "jotai"
import { PlacesType, Tooltip } from "react-tooltip"
import { themeAtom } from "../../store/atoms"

interface Props {
  id: string
  clickable?: boolean
  position?: PlacesType
  delayShown?: number
  hidden?: boolean
}

const CustomTooltip = ({ id, clickable = false, position = 'bottom', delayShown = 500, hidden = false }: Props) => {
  const [ darkTheme ] = useAtom(themeAtom)
  
  return (
    <Tooltip
      id={id}
      clickable={clickable}
      delayShow={delayShown}
      border={`1px solid ${darkTheme ? '#1e293b' : '#94a3b8'}`}
      style={darkTheme
        ? { backgroundColor: '#334155', color: '#e2e8f0' }
        : { backgroundColor: '#cbd5e1', color: '#1e293b' }
      }
      place={position}
      hidden={hidden}
    />
  )
}

export default CustomTooltip
