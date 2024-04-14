import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export function ImageCarousel({ images }: any) {
    return (
        <Carousel className="">
            <CarouselContent>
                {images?.map((image: any) => (
                    <CarouselItem key={image}>
                        <div className="p-1">
                            <Image
                                width={1920}
                                height={1080}
                                src={image}
                                alt={"image"}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
