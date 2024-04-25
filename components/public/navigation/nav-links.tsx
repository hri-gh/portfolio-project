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
                            // For hidden in mobile device :: hidden md:flex
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-sky-200 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 " />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
