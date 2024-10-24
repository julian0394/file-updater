import * as Dialog from '@radix-ui/react-dialog'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const InfoModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-slate-900/70 transition-all duration-500' />
        <Dialog.Content className='fixed max-h-[85vh] w-[90vw] max-w-[450px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-700 text-slate-100 p-5'>
          <h1>hola</h1>
          <button className='py-1 px-2 rounded-md bg-slate-600 text-slate-100' onClick={() => setIsOpen(false)}>cerrar</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default InfoModal
