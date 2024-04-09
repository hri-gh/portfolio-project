"use client"

import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import Cards from "@/components/admin/cards";

import { OverviewCardData } from "../page";


interface OverviewClientProps {
    data: OverviewCardData[]
}


export const OverviewClient: React.FC<OverviewClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Overview (${data.length})`}
                    description="Manage overview of default page"
                />
                <Button
                    onClick={() => router.push(`/admin/overview/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <Cards data={data} deleteApi={"/api/overview"} editApi={"/admin/overview"} />
        </>
    )
}
