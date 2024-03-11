import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import PublicProfilePage from "./components/public-profiles"
import BadgesPage from "./components/badges"


export default function PublicProfilesAndBadgesPage() {
  return (
      <Tabs defaultValue="public-profile" className="bg-green-500 p-5 rounded-md">

        <TabsList className="grid w-full grid-cols-2 items-center h-10">
          <TabsTrigger value="public-profile" className="hover:bg-gray-200">Public Profiles</TabsTrigger>
          <TabsTrigger value="badges" className="hover:bg-gray-200">Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="public-profile">
          <PublicProfilePage />
        </TabsContent>

        <TabsContent value="badges">
          <BadgesPage />
        </TabsContent>
      </Tabs>
  )
}
