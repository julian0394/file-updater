import Button from '../Button'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoMailOutline } from "react-icons/io5";

interface Props {}

const Header = (props: Props) => {
  // px-5 py-2 lg:px-20 lg:py-5
  const handleInfoClick = () => {
    alert('info')
  }
  const handleContactClick = () => {
    alert('contact')
  }
  const handleThemeClick = () => {

  }

  return (
    <header className='h-12 w-full bg-slate-700'>
      <div className='mx-auto flex h-full max-w-5xl items-center justify-between'>
        <span className='select-none cursor-default'>FileUp</span>
        <section className='flex gap-5'>
          <Button onClick={handleInfoClick} id='btn-Header-infoButton'>{<IoIosInformationCircleOutline />}</Button>
          <Button onClick={handleContactClick} id='btn-Header-contactButton'>{<IoMailOutline />}</Button>
          <Button onClick={handleThemeClick} id='btn-Header-themeButton'>{<IoMailOutline />}</Button>
          <span className='p-2'>C</span>
        </section>
      </div>
    </header>
  )
}

export default Header
