import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Header</h1>
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </>
  )
}

export default App
