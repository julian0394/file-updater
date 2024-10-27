import * as Dialog from '@radix-ui/react-dialog'

interface Props {
  open: boolean
}

const DragDropdown = ({ open }: Props) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-slate-600/70 dark:bg-slate-900/90 transition-all duration-500' />
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DragDropdown
