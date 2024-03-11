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

import SkillsPage from "./components/skills"
import CertificatesPage from "./components/certificates"

export default function SkillsCertificatesPage() {
  return (
      <Tabs defaultValue="skills" className="bg-green-500 p-5 rounded-md">

        <TabsList className="grid w-full grid-cols-2 items-center h-10">
          <TabsTrigger value="skills" className="hover:bg-gray-200">Skills</TabsTrigger>
          <TabsTrigger value="certificates" className="hover:bg-gray-200">Certificates</TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <SkillsPage />
        </TabsContent>

        <TabsContent value="certificates">
          <CertificatesPage />
        </TabsContent>
      </Tabs>
  )
}
