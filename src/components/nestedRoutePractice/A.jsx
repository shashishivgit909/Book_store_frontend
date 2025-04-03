import React from 'react'
import { Outlet } from 'react-router-dom';

const A = () => {
  return (
    <div>
        insideA
      <Outlet></Outlet>
    </div>
  )
}

export default A
