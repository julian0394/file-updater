import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
  id: string
}

const Button = ({ children, onClick, id }: Props) => {
  return (
    <button
      onClick={onClick}
      id={id}
      data-testid={`text-${id}`}
      className='rounded-md bg-slate-300 px-2 py-1 text-slate-800 transition-colors duration-150 hover:bg-slate-400/50 active:bg-slate-400/80 dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-slate-500/50 dark:active:bg-slate-500/80'>
      {children}
    </button>
  )
}
export default Button
