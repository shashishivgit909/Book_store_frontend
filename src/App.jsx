import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1><Navbar /></h1>
      <main className='min-h-screen mx-w-width-2xl mx-auto p-6 font-primary'>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </>
  )
}

export default App
