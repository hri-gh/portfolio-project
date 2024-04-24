
import { Separator } from "@/components/ui/separator"
import { AboutMeCard } from "./about-me-card"
import { LearningJourneyCard } from "./learning-journey-card"

export default function GridCard() {
    return (
        <div className="grid p-4 bg-black rounded-xl md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
           {/* CARD-1 */}
            <AboutMeCard/>


           {/* CARD-2 */}
            <LearningJourneyCard/>
        </div>
    )
}

