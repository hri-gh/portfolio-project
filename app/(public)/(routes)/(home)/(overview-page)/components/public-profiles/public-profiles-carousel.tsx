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
import { Separator } from "@/components/ui/separator"

export function PublicProfilesCarousel() {
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
            <div className="flex-1 [grid-area:stack] group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
            <h3 className="text-xl font-bold tracking-tight text-center">Public Profiles</h3>
            <Separator />
                <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
                // plugins={[
                //     AutoPlay({delay:2000})
                // ]}
                className="w-full max-w-lg mx-auto ">
                    <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className=" lg:basis-1/3">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent >
                    <CarouselPrevious className=""/>
                    <CarouselNext className=" "/>
                </Carousel>
                <div className="py-2 text-white text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div>
            </div>
        </div>
    )
}
