import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
  id: string
}

const HeaderButton = ({ children, onClick, id }: Props) => {
  return (
    <button
      onClick={onClick}
      id={id}
      data-testid={`text-${id}`}
      className='p-2 rounded-md hover:bg-slate-200 active:bg-slate-100/90 dark:hover:bg-slate-600 dark:active:bg-slate-500/70 transition-colors duration-150'
    >
      {children}
    </button>
  )
}

export default HeaderButton
