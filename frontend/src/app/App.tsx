import { useState } from 'react'
import ViteLogo from './vite.svg?react'
import './App.css'
import { toast } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AppRouter from './routes/AppRouter'

export default function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {

      toast.success(`Новое число${count + 1}`)
      setCount((count) => count + 1 )
  }

  return (
    <BrowserRouter>
      <ViteLogo className='logo'/>
      <MainLayout>
        <AppRouter/>
        <button onClick={() => onClick()}>
          count is {count}
        </button>
      </MainLayout>
    </BrowserRouter>
  )
}

