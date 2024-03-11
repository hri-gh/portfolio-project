/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hK3KFsmTTx0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="dark:bg-black min-h-screen text-white grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <nav className="">
        {/* <h1 className="text-4xl font-bold text-yellow-500">My Portfolio</h1> */}
        <div className="space-y-4">
          {/* <Link className="text-lg hover:underline text-yellow-500" href="#">
            Home
          </Link>
          <Link className="text-lg hover:underline text-yellow-500" href="#">
            About
          </Link>
          <Link className="text-lg hover:underline text-yellow-500" href="#">
            Projects
          </Link> */}
        </div>
      </nav>

      <div className="col-span-1 md:col-span-1 bg-yellow-500 p-8 rounded-lg" id="about">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg mt-4">
          I am a full-stack developer with a passion for creating beautiful and functional web applications. I have
          experience in a variety of technologies and am always eager to learn more.
        </p>
        <Image
          alt="Profile Picture"
          className="rounded-full w-48 h-48 mx-auto mt-8"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
      </div>

    </div>
  )
}

