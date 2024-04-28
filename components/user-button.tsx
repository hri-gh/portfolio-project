"use client"
import React from 'react'
import useAuthStore from '@/store/auth-store'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const UserButton = () => {
    const { isLoggedIn, userInitials } = useAuthStore((state: any) => state.auth)


    if (isLoggedIn) {
        return (
            <Avatar className='p-1'>
                {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                <AvatarFallback  className='cursor-pointer bg-gray-500'>{userInitials}</AvatarFallback>
            </Avatar>
        )
    }
    return (
        <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback></AvatarFallback>
        </Avatar>
    )
}

