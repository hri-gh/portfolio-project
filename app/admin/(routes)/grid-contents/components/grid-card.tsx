"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useParams, useRouter } from "next/navigation";

import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AlertModal } from "@/components/modals/alert-modal";
import { Edit, Copy, Delete } from "lucide-react";
export type GridCardData = {
    id: string; // unique identifier for column
    header: string;
    title: string;
    createdAt: string;

}

interface GridCardProps {
    data: GridCardData[]
}

import React from 'react'
import toast from "react-hot-toast";

const GridCards: React.FC<GridCardProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    const params = useParams()


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success('Content Id copied to clipboard.');
    }

    return (
        <div className="flex">
            {data.map((item) => (
                <div key={item.id} className="m-3">
                    <AlertModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        onConfirm={async () => {
                            try {
                                setLoading(true);
                                await axios.delete(`/api/grid-contents/${item.id}`);
                                toast.success('Content deleted.');
                                router.refresh();
                            } catch (error) {
                                toast.error('Something went wrong');
                            } finally {
                                setOpen(false);
                                setLoading(false);
                            }
                        }}
                        loading={loading}
                    />
                    <Card className="w-[350px] cursor-pointer"
                        onClick={() => router.push(`/admin/grid-contents/${item.id}`)}
                    >
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.header}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>

                        <CardFooter>
                            <p>{item.createdAt}</p>
                        </CardFooter>
                        <div className="flex gap-3 m-1 p-2">
                            <Edit
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation()
                                    router.push(`/admin/grid-contents/${item.id}`)
                                }} />
                            <Copy onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                onCopy(item.id)
                            }} />
                            <Delete onClick={(e: React.MouseEvent) => {
                                e.stopPropagation()
                                setOpen(true)
                            }} />
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default GridCards
