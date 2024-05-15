"use client"

import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"


export default function PublicProfileCard({ item }: any) {


    return (
        <div key="1" className="flex flex-col mx-auto">
            <div className="">
                <Image
                    alt="Logo"
                    className="p-3 mt-2 rounded object-cover bg-zinc-400"
                    height="100"
                    width="100"
                    src={item.imageUrl}
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                    }}
                />
            </div>
            {/* <div className="bg-gray-500 rounded-md m-1 text-center text-sm font-medium">{item.publicProfileName}</div> */}
            <Button
            variant="outline"
            className="mt-1 rounded"
            >

                <Link href={item.publicProfileLink} target="_blank">Visit</Link>
            </Button>
        </div>
    )
}
