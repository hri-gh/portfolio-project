/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YZeCezuKlyh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


import Image from "next/image"

export default function SkillsLogo() {
    return (
        <div key="1" className="m-1 content-center">
            <div className="">
                <Image
                    alt="Logo"
                    className="p-3 rounded-full object-cover bg-yellow-200"
                    height="64"
                    // src="/placeholder.svg"
                    src="/html.png"
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                    }}
                    width="64"
                />
            </div>
            <div className="bg-gray-500 rounded-md m-1 text-center text-sm font-medium">HTML</div>
        </div>
    )
}

