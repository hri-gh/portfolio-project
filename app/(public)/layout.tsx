import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import SideNav from "@/components/custom-components/sidenav";
// import { ModeToggle } from "@/components/custom-components/mode-toggle";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Project",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="">

        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className=" w-full flex-none md:w-64">
            {/* <SideNav /> */}
            SideNav
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
        </div>
      </body>
    </html>
  );
}
