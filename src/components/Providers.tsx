import { PropsWithChildren, StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props extends PropsWithChildren {}

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </StrictMode>
  )
}

export default Providers
