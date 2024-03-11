import { HiGlobeAlt } from 'react-icons/hi';
import { lusitana } from '../fonsts/fonts';
import Image from 'next/image';
import { FaGithubSquare  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '../ui/button';
import Link from 'next/link';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className}flex flex-col items-center leading-none text-white`}
    >
      <Image
        alt="Profile Picture"
        className="rounded-full mx-auto object-cove"
        height="96"
        // src="/placeholder.svg"
        src="/pp-pic.jpeg"
        style={{
          aspectRatio: "96/96",
          objectFit: "cover",
        }}
        priority
        width="96"
      />

      <div className='text-center'>
        <p className="text-center text-[44px]">Hri</p>
        {/* <p className="text-center text-[15px]">I am a Developer</p> */}
        <p className="text-sm">
          <strong>Location: </strong>
          WB, India
        </p>
        <p className="text-sm m-0">
          <strong>Bio: </strong>
          Software Engineer
        </p>
      </div>
      <div className='p-1 flex justify-center gap-2'>
        <Button size="icon">
          <FaGithubSquare />
        </Button>
        <Button size="icon">
          <FaLinkedin />
        </Button>
      </div>
    </div>
  );
}
