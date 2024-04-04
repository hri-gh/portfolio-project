"use client"
import React from 'react'
import useAuthStore from '@/store/auth-store'
import { Button } from '@/components/ui/button'


const AdminHomePage = () => {
  const logout = useAuthStore((state) => state.logout)
  const { isLoggedIn, userInitials } = useAuthStore((state: any) => state.auth)

  const onLogout = () => {
    if (window.confirm('Are you sure?')) {
      logout()
    }
  }


  return (
    <div>
      {/* AdminHomePage */}
      {isLoggedIn ? `Welcome ${userInitials}!` : 'Please log in to view this content.'}
      {/* <p>

        Hello :{userInitials}! You
      </p> */}
      <div>
      <Button onClick={onLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default AdminHomePage
