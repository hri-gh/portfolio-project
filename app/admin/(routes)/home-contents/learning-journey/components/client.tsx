"use client"

import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import LearningJourneyCard from "./cards";

import { LearningJourneyCardData } from "../page";
import Link from "next/link";


interface LearningJourneyClientProps {
    data: LearningJourneyCardData[]
}


export const LearningJourneyClient: React.FC<LearningJourneyClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Link href={"/admin/home-contents/learning-journey"}>
                <Heading
                    title={`Learning Journey (${data.length})`}
                    description="Manage Learning Journey of default page"
                />
                </Link>
                <Button
                    onClick={() => router.push(`/admin/home-contents/learning-journey/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <LearningJourneyCard data={data}/>
        </>
    )
}
