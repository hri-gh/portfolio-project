import Link from 'next/link';
import NavLinks from './nav-links';

import AcmeLogo from './acme-logo';

import { ModeToggle } from './mode-toggle';
import { MobileSideNav } from './mobile-sidenav';
import { Button } from '../ui/button';

export default function SideNav() {

  const blue500 = "bg-blue-400"

  return (
    <>
      <MobileSideNav />
      {/* <div className={`${blue500}`}>Hello</div> */}
      <div className="flex h-full flex-col px-3 py-4 md:px-2 ">

        <Link
          className="mb-2 p-2 flex h-auto items-center justify-center rounded-md bg-yellow-500 " // removed md:h-40
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <AcmeLogo />
          </div>
        </Link>

        <div className=" flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 text-black md:block">
            {/* <header className='text-center'>Contact</header> */}

            {/* <div className='bg-gray-500 rounded-sm p-2 m-1'>Email...</div>
            <div className='bg-gray-500 rounded-sm p-2 m-1'>Message...</div>
            <Button variant="secondary"  className='rounded-full m-1'>Send Message</Button> */}
          </div>

          <div className='flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <ModeToggle />
            <div className="hidden md:block text-black">Toggle Theme</div>
          </div>

        </div>
      </div>
    </>
  );
}
