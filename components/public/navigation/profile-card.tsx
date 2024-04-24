"use client"

import { HiGlobeAlt } from 'react-icons/hi';
import { lusitana } from '@/components/fonts/fonts';
import Image from 'next/image';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { FaSquarePhoneFlip } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function ProfileCard() {
    const [isMounted, setIsMounted] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    return (
        <div
            className={`${lusitana.className}flex flex-col justify-center items-center leading-none text-white`}
        >
            <Image
                alt="Profile Picture"
                className="rounded-full mx-auto object-cover"
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
                <p className="text-center text-xl font-medium">Hrithik Ghosh</p>
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
            {/* <p className='text-sm'><strong>Mail:</strong>hrithikgh.edu@gmail.com</p>
      <p className='text-sm'><strong>Phone:</strong>9382020441</p> */}
            <div className='p-1 flex justify-center gap-2'>
                <Button size={'sm'}>
                    <Link href={'https://github.com/hri-gh'}>
                    <FaGithubSquare />
                    </Link>
                </Button>
                <Button size="sm">
                    <FaLinkedin />
                </Button>
                <Button size="sm">
                    <MdMail />
                </Button>
                <Button size="sm">
                    <FaPhone />
                </Button>
            </div>
            <p className='text-sm text-center mx-auto mt-1'>
                <strong>
                    Contact
                </strong>
            </p>
        </div>
    );
}
