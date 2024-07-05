"use client"

import Link from 'next/link';
import Image from 'next/image';

// Fonts Import
import { lusitana } from '@/components/fonts/fonts';

// Icons Import
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { FaPhone } from "react-icons/fa";

import { Badge } from '@/components/ui/badge';

import { ContactModal } from '@/components/modals/contact-modal'
import { useState } from 'react';

import { MovingBorderButton } from '@/components/custom-ui/moving-border';

export default function ProfileCard() {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onHandleContact = (e: React.MouseEvent) => {
        e.stopPropagation()
        setLoading(true)
        setOpen(true)
        setLoading(false)
    }

    return (
        <div
            className={`${lusitana.className}flex flex-col justify-center items-center leading-none text-white`}
        >
            <ContactModal
                isOpen={open}
                onClose={() => setOpen(false)}
                loading={loading}
            />
            <Image
                alt="Profile Picture"
                className="rounded-full mx-auto object-cover"
                height="96"
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
                <Link href={'https://github.com/hri-gh'} target='_blank'>
                    <Button size={'sm'}>
                        <FaGithubSquare />
                    </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/hri-gh" target='_blank'>
                    <Button size="sm">
                        <FaLinkedin />
                    </Button>
                </Link>

                <Link href='mailto:hrithikgh.edu@gmail.com'>
                    <Button size="sm">
                        <MdMail />
                    </Button>
                </Link>

                <Link href="tel:+919382020441">
                    <Button size="sm">
                        <FaPhone />
                    </Button>
                </Link>
            </div>
            <div className='flex justify-center'>
                {/* <Badge className='text-sm  mt-1 cursor-pointer'>
                    Contact
                </Badge> */}

                <Button
                    variant={"secondary"}
                    size={"sm"}
                    onClick={onHandleContact}
                    className='mt-1 rounded-full border-2 border-dashed  border-sky-500'>
                    <strong>
                        Contact
                    </strong>
                </Button>

            </div>
        </div>
    );
}
