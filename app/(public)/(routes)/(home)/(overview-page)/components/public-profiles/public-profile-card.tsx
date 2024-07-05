"use client"

import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { MoveRight } from "lucide-react"
import { Separator } from '@/components/ui/separator'

export default function PublicProfileCard({ item }: any) {


    return (
        <>
            <div className='font-bold flex gap-2 items-center my-auto justify-between'>
                <div className='hover:underline cursor-pointer'>
                    {item?.publicProfileName}
                </div>
                <Link href={item.publicProfileLink} target="_blank">
                    <Button className=" mr-3 my-0.5 flex items-center gap-2 group " variant="outline">
                        <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">Visit</span>
                        <MoveRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
            <Separator className='my-2' />
        </>
    )
}


