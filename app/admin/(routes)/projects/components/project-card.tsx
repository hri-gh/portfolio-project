"use client"

import React from 'react'
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";


// UI COMPONENTS
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { AlertModal } from "@/components/modals/alert-modal";


// ICONS
import { Edit, Copy, Delete } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


// DATA TYPE
import { ProjectCardData } from "../page";

interface ProjectCardProps {
    data: ProjectCardData[];
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    const params = useParams()


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success('Id copied to clipboard.');
    }

    return (
        <div className="flex">
            {data.map((item: any) => (
                <div key={item.id} className="m-3">
                    <AlertModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        onConfirm={async () => {
                            try {
                                setLoading(true);
                                await axios.delete(`/api/projects/${item.id}`);
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
                    <Card className="w-[350px] rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
                    // onClick={() => router.push(`/admin/projects/${item.id}`)}
                    >
                        <CardHeader>
                            <CardTitle>{item?.projectName}</CardTitle>
                            <CardDescription>{item?.aboutProject}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            {item?.image && (
                                <Image
                                    alt="project_image"
                                    src={item?.image.url}
                                    width={480}
                                    height={100}
                                    className="aspect-video object-cover rounded-md mb-2 "
                                />
                            )}

                            {item?.technologies?.split(',').map((technologiesItem: any, index: number) => (
                                <Badge className="mr-1" key={index}>{technologiesItem}</Badge>
                            ))}
                        </CardContent>

                        <CardFooter className="m-1">
                            {item?.githubLink && (
                                <Link href={item.githubLink} target='_blank'>
                                    <GitHubLogoIcon />
                                </Link>
                            )}
                        </CardFooter>

                        <div className="m-1 space-y-1 text-black font-normal">
                            <div className="bg-stone-400 rounded-full pl-1 ">
                                <span className="text-blue-950 font-medium">Created At : </span>
                                {item.createdAt}
                            </div>
                            <div className="bg-stone-400 rounded-full pl-1">
                                <span className="text-blue-950 font-medium">Updated At : </span>
                                {item.updatedAt}
                            </div>
                        </div>
                        <div className="flex gap-3 m-1 p-2 bg-gray-800 rounded-md">
                            <Edit
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation()
                                    router.push(`/admin/projects/${item.id}`)
                                }} />
                            <Copy
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    onCopy(item.id)
                                }} />
                            <Delete
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
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

