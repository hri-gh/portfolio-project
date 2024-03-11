import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import SkillsLogo from "@/components/custom-components/skills-logo";
import { Separator } from "@/components/ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import Image from "next/image";

import { CardStackDemo } from "./card-stack-demo";

import { Card, CardContent } from "@/components/ui/card"
import VerticalCard from "@/components/custom-components/vertical-project-card";
import ScrollAreaHorizontalDemo from "./sc";
export default function DefaultPage() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex justify-center  flex-1 w-full h-full min-h-[6rem] rounded-xl border-none border-transparent dark:border-white/[0.2]  ">
        <ScrollArea >
    <Carousel className="w-full max-w-full my-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" rounded-md m-2 p-1 md:basis-1/2 lg:basis-1/3 bg-gray-500">

              <div className="p-1">
                {/* <Card> */}
                {/* <Image
                alt="In-flight shopping"
                className="aspect-video object-fill "
                // className='object-fill overflow-hidden rounded-md'
                height={200}
                // src="/placeholder.svg"
                //src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                // src="/my_pp_1.png"
                // src="/my_pp_4.png"
                src="/fcc_pp.png"
                width={600}
              /> */}
                <Image
                  src="/fcc_pp.png"
                  alt={`Photo by `}
                  className="aspect-[6/4] h-fit w-fit object-cover"
                  width={400}
                  height={400}
                />
                {/* <ScrollAreaHorizontalDemo/> */}
                {/* <CardContent className="bg-green-500  flex aspect-square items-center justify-center p-6"> */}
                {/* <span className="text-2xl font-semibold"> */}


                {/* </span> */}
                {/* </CardContent> */}
                {/* </Card> */}
              </div>


          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="">

<CarouselPrevious className="border-4 border-red-500" />
<CarouselNext className="border-4 border-red-500" />
</div> */}
    </Carousel>
<ScrollBar className="bg-red-500" orientation="horizontal" />
</ScrollArea>
  </div>
);
const Skills = () => (
  <div className=" flex flex-wrap justify-center">
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />
    <SkillsLogo />

  </div>
);

const Sca = () => (

  <ScrollArea className=" rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and leaving
    jokes all over the place: under the kings pillow, in his soup, even in the
    royal toilet. The king was furious, but he couldnt seem to stop Jokester. And
    then, one day, the people of the kingdom discovered that the jokes left by
    Jokester were so funny that they couldnt help but laugh. And once they
    started laughing, they couldnt stop.
  </ScrollArea>
)

const items = [
  {
    title: <h1 className="text-4xl overflow-clip">Hello I am Hri, I am a fullstack developer and Cyber Security Expert. I enjoy building sites & apps</h1>,
    //description: "",
    //header: <Skeleton />,
    className: "md:col-span-2 overflow-auto shadow-lg",
    //icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: <ScrollArea>After graduating with a degree in Accounting, I decided to pusue for programming. Ienrolled in a coding bootcamp and learned full satck web developemt. My favorite part of programming is the problem solving aspect. I love the feeling of finnally figuring out a solution to a problem. My core stack is React & Next.js, Node.js or MongoDB.</ScrollArea>,
    //description: "Dive into the transformative power of technology.",
    header: <><h1 className="text-4xl">About Me</h1><Separator /></>,
    className: "md:col-span-1 overflow-hidden",
    //icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   // title: "The Art of Design",
  //   // description: "Discover the beauty of thoughtful and functional design.",
  //   // header:<CardStackDemo/>,
  //   className: "md:col-span-1",
  //   // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
  {
    title: "The Art of Design jhfj,hvhv mhghjghjbjbhj,gj ,jgjgj hjgjhbj,hjgg",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: <><h1 className="text-4xl">Learning Journey</h1><Separator /></>,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Power of Communication",
    // description:"Understand the impact of effective communication in our lives.",
    header: <Skills />,
    className: "md:col-span-2 overflow-auto",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    //title: "The Power of Communication",
    description: "Some of my certificates which showcase my skills. To show more...Click Here",
    header: <Skeleton />,
    className: "md:col-span-3 ",
    //icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    // title: "The Power of Communication",
    // description:"Understand the impact of effective communication in our lives.",
    header: <Sca />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    //title: "The Power of Communication",
    description: "Some of my certificates which showcase my skills. To show more...Click Here",
    header: <Skeleton />,
    className: "md:col-span-3 ",
    //icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
