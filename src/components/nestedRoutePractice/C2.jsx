import React from 'react'
import { Outlet } from 'react-router-dom';
const C2 = () => {
  return (
    <div>
      inside C2
      <Outlet></Outlet>
    </div>
  )
}

export default C2;
