import Button from '../HeaderButton'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { GrSun } from 'react-icons/gr'
import { PiMoonLight } from 'react-icons/pi'
import { themeAtom } from '../../store/atoms'
import { useAtom } from 'jotai'
import { useState } from 'react'
import InfoModal from '../InfoModal'
import { MdCloudUpload } from 'react-icons/md'

interface Props {}

const Header = ({}: Props) => {
  const [darkTheme, setDarkTheme] = useAtom(themeAtom)
  const [openModal, setOpenModal] = useState(false)

  const handleInfoClick = () => {
    setOpenModal(true)
  }
  const handleContactClick = () => {
    alert('contact')
  }
  const handleThemeClick = () => {
    setDarkTheme( !darkTheme )
    document.body.classList.toggle("dark")
  }

  return (
    <header className='h-12 w-full border-b border-b-slate-400/20 dark:border-b-slate-900/70 bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100'>
      <div className='mx-auto flex h-full max-w-5xl items-center justify-between'>
        <span className='flex items-center gap-1 select-none cursor-default font-bold text-lg'>
          <MdCloudUpload className='text-2xl' />
          FileUp
        </span>
        <section className='flex gap-2 text-xl'>
          <Button onClick={handleInfoClick} id='btn-Header-infoButton'>{<IoIosInformationCircleOutline />}</Button>
          <Button onClick={handleContactClick} id='btn-Header-contactButton'>{<IoMailOutline />}</Button>
          <Button onClick={handleThemeClick} id='btn-Header-themeButton'>{darkTheme ? <GrSun /> : <PiMoonLight />}</Button>
        </section>
      </div>

      <InfoModal isOpen={openModal} setIsOpen={setOpenModal} />
    </header>
  )
}

export default Header
