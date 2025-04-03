import React from 'react'
import { Outlet } from 'react-router-dom';

const C1 = () => {
  return (
    <div>
       inside c1
       <Outlet/>
    </div>
  )
}

export default C1
