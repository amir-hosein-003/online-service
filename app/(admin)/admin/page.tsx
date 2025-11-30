"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const AdminDashboard = () => {

  const pathName = usePathname();
  console.log(pathName)

  return (
    <div className="text-3xl font-bold">داشبورد ادمین</div>
  )
}

export default AdminDashboard