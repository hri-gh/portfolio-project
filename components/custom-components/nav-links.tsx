'use client';

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import {
  HiUserGroup,
  HiHome,
  HiDocumentDuplicate

} from 'react-icons/hi';

import { PiCertificateFill } from 'react-icons/pi';
import { CgWebsite } from "react-icons/cg";
import { BiSolidUserBadge } from "react-icons/bi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { links } from '@/lib/nav-links-data'

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              " text-black flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >

            <LinkIcon className="w-6" />

            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
