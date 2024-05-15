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


import { useCertificates } from '@/hooks/get-certificates';
import { Certificate } from "@/components/public/certificates/certificate"
import Image from "next/image"

export function CertificaatesCarousel() {

    const [data, error, loading] = useCertificates()

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(data.length)



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
        // remove from below div :: [grid-area:stack]
        <div className="bg-gray-500 mt-2 overflow-hidden rounded-lg">
            <div className=" flex-1 [grid-area:stack] bg-gray-900 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        AutoPlay({ delay: 1000 })
                    ]}
                    className="w-full mx-auto ">
                    <CarouselContent >
                        {data.map((item: any, index:number) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                {/* <Certificate key={item.id} item={item} /> */}
                                <Card >

                                        <Image
                                            alt="Card Image"
                                            className="w-full aspect-square rounded-lg"
                                            height="300"
                                            src={item.imageUrl}
                                            style={{
                                                aspectRatio: "500/300",
                                                objectFit: "fill",
                                            }}
                                            width="500"

                                        />
                                    {/* <CardContent className="flex aspect-square bg-blue-500 rounded-md items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent> */}
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
                {/* <div className="py-2 text-white text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div> */}
            </div>
        </div>
    )
}
