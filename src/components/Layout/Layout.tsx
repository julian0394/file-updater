import { twMerge } from 'tailwind-merge'
import Header from './Header'
import Main from './Main'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div className='flex h-screen w-full flex-col items-start justify-start text-slate-100'>
      <Header />
      <Main />

      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        toastClassName={() => (
          twMerge('relative flex p-2 border rounded-md justify-between overflow-hidden cursor-pointer')
        )}
      />
    </div>
  )
}

export default Layout
