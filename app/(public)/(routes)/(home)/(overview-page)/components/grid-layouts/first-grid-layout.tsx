
import { Separator } from "@/components/ui/separator"
import { AboutMeCard } from "../about-me/about-me-card"
import { LearningJourneyCard } from "../learning-journey/learning-journey-card"
import { Skills } from "../skills/skills"
import { PublicProfilesCarousel } from "../public-profiles/public-profiles-carousel"
import { PublicProfiles } from "../public-profiles/public-profiles"

export default function FirstGridLayout() {
    return (
        <div className="grid p-4 bg-black rounded-xl md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
            {/* COMPONENT-1 */}
            <AboutMeCard />

            {/* COMPONENT-2 */}
            <LearningJourneyCard />

            {/* COMPONENT-3 */}
            <Skills />

            {/* COMPONENT-4 */}
            {/* <PublicProfilesCarousel /> */}
            <PublicProfiles/>
        </div>
    )
}

