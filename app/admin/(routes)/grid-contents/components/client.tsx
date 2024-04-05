"use client"

import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";
import { DataTable } from "@/components/ui/data-table"

import { GridContentColumn, columns } from "./columns";

interface GridContentClientProps {
    data: GridContentColumn[]
}

export const GridContentClient: React.FC<GridContentClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Grid Contents (${data.length})`}
                    description="Manage Contents of Bento Grids"
                />
                <Button
                    onClick={() => router.push(`/admin/grid-contents/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="header" />


        </>
    )
}
