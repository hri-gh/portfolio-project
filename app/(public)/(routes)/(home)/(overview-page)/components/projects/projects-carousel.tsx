"use client"

import * as React from "react"
import AutoPlay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import Image from "next/image"

import { useProjects } from '@/hooks/get-projects';
import ProjectCard from "@/components/public/projects/project-card";

export function ProjectsCarousel() {

    const [data, error, loading] = useProjects()

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="bg-gray-500 overflow-hidden rounded-lg">
            <div className=" flex-1 [grid-area:stack] bg-teal-500 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                <h3 className="text-xl font-bold tracking-tight text-center">Projects</h3>
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        AutoPlay({ delay: 2000 })
                    ]}
                    className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {data.map((item: any, index: number) => (
                            <CarouselItem key={index} >
                                {/* <ProjectCard key={item.id} item={item} /> */}
                                <Card>
                                    <Image
                                        alt="In-flight shopping"
                                        className="aspect-video object-fill overflow-hidden rounded-xl bg-gray-600 p-1 object-center"
                                        height={200}
                                        src={item.images[0]?.url}
                                        width={400}

                                        priority

                                    />

                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="py-2 text-white text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div>
            </div>
        </div>
    )
}
