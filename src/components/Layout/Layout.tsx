import Header from './Header'
import Main from './Main'

interface Props {}

const Layout = (props: Props) => {
  return (
    <div className='flex h-screen w-full flex-col items-start justify-start text-slate-100'>
      <Header />
      <Main />
    </div>
  )
}

export default Layout
