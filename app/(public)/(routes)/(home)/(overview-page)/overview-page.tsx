import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Separator } from '@/components/ui/separator'
import { InfiniteCertificateMovingCards } from './components/infinite-moving-cards/infinite-certificate-moving-cards'

import GridCard from './components/grid-card/grid-card'
import { SkillList } from '@/components/public/skills/skill-list'

import { OverviewScrollarea } from './components/overview/overview-scrollarea'

const OverviewPage = () => {
  return (
    <>
      <div className=''>
        <OverviewScrollarea />

        <GridCard />

        <ScrollArea className='bg-black rounded-xl border p-4 my-2'>
          <SkillList />
        </ScrollArea>

        {/* <InfiniteCertificateMovingCards/> */}

        {/* <ScrollArea className='bg-gray-500 rounded-xl border p-4 my-2'> */}
        {/* <ProjectsList /> */}
        {/* </ScrollArea> */}
        {/* <ProjectCarousel /> */}

        {/* <SecondGridCard/> */}

        {/* <CardStackDemo/> */}

        {/* <ScrollAreaHorizontalDemo/> */}

        {/* <div className='mb-2'></div> */}

      </div>
    </>
  )
}

export default OverviewPage





// <div className='flex flex-row flex-wrap gap-2'>
//   <ScrollArea className="bg-gray-500 w-2/ rounded-md border p-4">
//     Jokester began sneaking into the castle in the middle of the night and leaving
//     jokes all over the place: under the kings pillow, in his soup, even in the
//     royal toilet. The king was furious, but he couldnt seem to stop Jokester. And
//     then, one day, the people of the kingdom discovered that the jokes left by
//     Jokester were so funny that they couldnt help but laugh. And once they
//     started laughing, they couldnt stop.
//   </ScrollArea>
//   <ScrollArea className="bg-gray-500  rounded-md border p-4">
//     <h1 className='text-4xl mb-2'>Heading</h1>
//     <Separator className='mb-2' />
//     Jokester began sneaking into the castle in the middle of the night and leaving
//     jokes all over the place: under the kings pillow, in his soup, even in the
//     royal toilet. The king was furious, but he couldnt seem to stop Jokester. And
//     then, one day, the people of the kingdom discovered that the jokes left by
//     Jokester were so funny that they couldnt help but laugh. And once they
//     started laughing, they couldnt stop.
//   </ScrollArea>
// </div>
