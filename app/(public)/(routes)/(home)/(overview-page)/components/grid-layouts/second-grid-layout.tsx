
import { Separator } from "@/components/ui/separator"
import { BadgesCarousel } from "../badges/badges-carousel"
import { ProjectsCarousel } from "../projects/projects-carousel"


export default function SecondGridLayout() {
    return (
        <div className="grid p-4 mt-2 bg-gray-200 dark:bg-black rounded-xl md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
            {/* COMPONENT-1 */}
            <BadgesCarousel />

            {/* COMPONENT-2 */}
            <ProjectsCarousel />

            {/* COMPONENT-3 */}


            {/* COMPONENT-4 */}

        </div>
    )
}

