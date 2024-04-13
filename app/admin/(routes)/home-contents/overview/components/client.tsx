"use client"

import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import OverviewCard from "./cards";

import { OverviewCardData } from "../page";
import Link from "next/link";


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
                <Link href={"/admin/home-contents/overview"}>
                <Heading
                    title={`Overview (${data.length})`}
                    description="Manage overview of default page"
                />
                </Link>
                <Button
                    onClick={() => router.push(`/admin/home-contents/overview/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <OverviewCard data={data}/>
        </>
    )
}
