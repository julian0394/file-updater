import * as Dialog from '@radix-ui/react-dialog'
import { Dispatch, SetStateAction } from 'react'
import HeaderButton from './HeaderButton'
import Button from './Button'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const InfoModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-slate-600/70 transition-all duration-500 dark:bg-slate-900/90' />
        <Dialog.Content className='fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-200 dark:bg-slate-700 p-5 text-slate-800 dark:text-slate-100'>
          <h1>hola</h1>
          <Button
            id='btn-InfoModal-closeButton'
            // className='rounded-md bg-slate-600 px-2 py-1'
            onClick={() => setIsOpen(false)}>
            cerrar
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default InfoModal
