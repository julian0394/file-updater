import Button from '../HeaderButton'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { GrSun } from 'react-icons/gr'
import { PiMoonLight } from 'react-icons/pi'
import { themeAtom } from '../../store/atoms'
import { useAtom } from 'jotai'
import { useState } from 'react'
import InfoModal from '../InfoModal'
import * as Dialog from '@radix-ui/react-dialog' 


interface Props {}

const Header = ({}: Props) => {
  const [theme, setTheme] = useAtom(themeAtom)
  const [openModal, setOpenModal] = useState(false)

  const handleInfoClick = () => {
    setOpenModal(true)
  }
  const handleContactClick = () => {
    alert('contact')
  }
  const handleThemeClick = () => {
    setTheme( theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className='h-12 w-full bg-slate-700'>
      <div className='mx-auto flex h-full max-w-5xl items-center justify-between'>
        <span className='select-none cursor-default'>FileUp</span>
        <section className='flex gap-2'>
          <Button onClick={handleInfoClick} id='btn-Header-infoButton'>{<IoIosInformationCircleOutline />}</Button>
          <Button onClick={handleContactClick} id='btn-Header-contactButton'>{<IoMailOutline />}</Button>
          <Button onClick={handleThemeClick} id='btn-Header-themeButton'>{theme === 'light' ? <PiMoonLight /> : <GrSun />}</Button>
        </section>
      </div>

      <InfoModal isOpen={openModal} setIsOpen={setOpenModal} />
    </header>
  )
}

export default Header
