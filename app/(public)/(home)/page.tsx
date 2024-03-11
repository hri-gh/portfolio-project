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

import DefaultPage from "./components/default-page"
import ResumePage from "./components/resume-page"

export default function Home() {
  return (
    <>
    <Tabs defaultValue="default" className="bg-yellow-500 p-5 rounded-md">

      <TabsList className=" grid w-full grid-cols-2 items-center h-10">
        <TabsTrigger value="default" className="hover:bg-gray-200">Default</TabsTrigger>
        <TabsTrigger value="resume" className="hover:bg-gray-200">Reusme</TabsTrigger>
      </TabsList>

      <TabsContent value="default">
        <DefaultPage/>
      </TabsContent>

      <TabsContent value="resume">
        <ResumePage/>
      </TabsContent>
    </Tabs>
    </>
  )
}
