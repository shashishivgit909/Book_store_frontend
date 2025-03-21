
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvide } from './context/AuthContext'
function App() {


  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen px-4 py-6 mx-auto max-w-screen-2xl font-primary '>
          <Outlet />
        </main>
      </AuthProvide>

    </>
  )
}

export default App
