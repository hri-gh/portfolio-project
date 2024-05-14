"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

import { MdOutlineAttachEmail } from "react-icons/md";
import { Mail, Phone, Linkedin, Github, Copy } from 'lucide-react';
import { FaRegCopy } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import { BiSolidCopy } from "react-icons/bi";
// import { FaCopy } from "react-icons/fa";
import { Badge } from '@/components/ui/badge';
import { FaCopy } from "react-icons/fa6";
import toast from 'react-hot-toast';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const ContactInfo = () => {
    return (
        <>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger>
                        <Badge
                            onClick={() => {
                                navigator.clipboard.writeText("hrithikgh.edu@gmail.com")
                                toast.success('Email copied to clipboard.');
                            }}
                            className='bg-gray-500 gap-1 m-1 cursor-pointer'>
                            {/* <div className=' flex my-1 gap-2  bg-gray-500 rounded-md p-1 text-sm mx-1'> */}
                            <Mail /> hrithikgh.edu@gmail.com
                            {/* </div> */}
                            {/* <div> */}
                            <Copy className='h-4 w-4' />
                            {/* <MdCopyAll className='my-auto bg-white rounded-lg float-end p-0.5 w-8 h-5' /> */}
                            {/* </div> */}
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black text-white'>
                        <p>Click to copy</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>


            <div

                className='cursor-pointer flex my-1 gap-2 bg-gray-500 rounded-md p-1 text-sm mx-1'>
                <Phone /> 9382020441
                <MdCopyAll
                    onClick={() => {
                        navigator.clipboard.writeText("9382020441")
                        toast.success('Mobile Number copied to clipboard.');
                    }}
                    className='hover:p-1 my-auto bg-white rounded-lg float-end p-0.5 w-8 h-5' />
            </div>

            <div className='flex my-1 gap-2 bg-gray-500 rounded-md p-1 text-sm mx-1'>
                <Linkedin /> linkedin.com/in/hri-gh
            </div>
            <div className='flex my-1 gap-2 bg-gray-500 rounded-md p-1 text-sm mx-1'>
                <Github /> github.com/in/hri-gh
            </div>
            {/* <Button variant="secondary" className='rounded-full m-1'>Send Message</Button> */}
        </>
    )
}

