/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KsjKj0UXqVC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { ProjectsList } from "@/components/public/projects/project-list"
import { ProjectCarousel } from "./project-carousel"

export default function SecondGridCard() {
    return (
        <div className="grid p-4 bg-black rounded-xl md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                </Link> */}
                {/* <Image
                    alt="Cover image"
                    className=" [grid-area:stack] object-cover w-full aspect-video"
                    height={495}
                    src="/placeholder.svg"
                    width={660}
                /> */}
                <div className="flex-1 [grid-area:stack] bg-gray-900 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold tracking-tight">About Me</h3>
                    <Separator />

                    <ProjectCarousel/>
                </div>
            </div>
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                </Link> */}
                {/* <Image
                    alt="Cover image"
                    className=" [grid-area:stack] object-cover w-full aspect-video"
                    height={495}
                    src="/placeholder.svg"
                    width={660}
                /> */}
                <div className="flex-1 [grid-area:stack] bg-gray-900 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    <h3 className="font-semibold tracking-tight">About Me</h3>
                    <Separator />

                    {/* <ProjectCarousel/> */}
                    Hello
                </div>
            </div>

        </div>
    )
}

