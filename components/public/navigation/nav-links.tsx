'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { links } from './nav-links-data';

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
                            " text-black md:flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gradient-to-r  border-y-2 border-indigo-500 from-yellow-500 to-gray-300 p-2 text-xs md:text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ",
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 hidden md:block" />
                        <p className="text-center ">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
