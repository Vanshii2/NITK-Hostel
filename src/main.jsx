import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { PeopleProvider } from './context/PeopleProvider'
import { HostelsProvider } from './context/HostelsProvider'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PeopleProvider>
      <HostelsProvider>
        <Toaster position='top-center' />
        <RouterProvider router={router} />
      </HostelsProvider>
    </PeopleProvider>
  </StrictMode>,
)
