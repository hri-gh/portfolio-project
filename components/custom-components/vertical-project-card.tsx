/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NYLclZmVCdq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function VerticalCard() {
  return (
    <Card className="cursor-pointer w-full p-2 max-w-sm m-2 border-2 border-indigo-500">
      {/* <CardHeader className="flex flex-col items-center gap-2">
        <CardTitle className="text-center">In-Flight Shopping Experience</CardTitle>
        <CardDescription className="text-sm text-center">
          Browse and buy items from the comfort of your seat
        </CardDescription>
      </CardHeader> */}
      <Image
        alt="In-flight shopping"
        className="aspect-video object-fill overflow-hidden rounded-xl bg-gray-600 p-2 object-center"
        // className='object-fill overflow-hidden rounded-md'
        height={200}
        // src="/placeholder.svg"
        //src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        src="/my_pp_1.png"
        // src="/my_pp_4.png"
        // src="/fcc_pp.png"
        width={400}
      />
      <CardContent className="grid gap-4 p-6">
        <p className="hover:underline uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Project Name
        </p>
        <div className="grid grid-cols-3 gap-2 overflow-hidden">
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>JavaScript</Badge>
          <Badge>Python</Badge>
          <Badge>C++</Badge>
          <Badge>React</Badge>
          <Badge>Django</Badge>
          <Badge>Nodejs</Badge>
        </div>
        <p className="text-sm text-slate-500  leading-tight font-medium hover:underline">
          About Project a book or other written or printed work, regarded in terms of its content rather than its physical for
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 p-4">
        <Button variant="outline">Browse</Button>
        <Button>
          <GitHubLogoIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}

