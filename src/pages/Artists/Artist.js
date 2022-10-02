import React from 'react'
import {Outlet} from 'react-router-dom'

export default function Artists() {
  return (
    <div className=" text-textwhite">
      <div><Outlet/></div>
    </div>
  )
}
