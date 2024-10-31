import { PropsWithChildren, StrictMode } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StrictMode>
      {children}
    </StrictMode>
  )
}

export default Providers
