
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <main className='w-screen h-screen font-primary'>
        <Outlet />
      </main>
    </>
  )
}

export default App
