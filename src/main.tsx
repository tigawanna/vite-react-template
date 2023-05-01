import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import './styles/scrollbar.css'
import { RouterProvider } from '@tanstack/router'
import { router } from './router/router'






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,
)
