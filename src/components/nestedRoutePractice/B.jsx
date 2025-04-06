import React from 'react'
import { Outlet } from 'react-router-dom';

const B = () => {
  return (
    <div>
        inside b
         <Outlet/>
    </div>
  )
}

export default B
