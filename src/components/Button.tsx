import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

interface Props extends PropsWithChildren {
  onClick: () => void
  id: string
}

const Button = ({ children, onClick, id }: Props) => {
  return (
    <button onClick={onClick} id={id} data-testid={`text-${id}`}>
      {children}
    </button>
  )
}

export default Button
