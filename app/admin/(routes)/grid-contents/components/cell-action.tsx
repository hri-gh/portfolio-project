"use client"

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { FaRegEdit, FaRegCopy, } from "react-icons/fa";
import { LuMoreHorizontal } from "react-icons/lu"
import { MdDelete } from "react-icons/md";

import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { GridContentColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { AlertModal } from "@/components/modals/alert-modal";


interface CellActionProps {
    data: GridContentColumn;
}


export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success('Content Id copied to clipboard.');
    }

    const onConfirm = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/grid-contents/${data.id}`);
            toast.success('Content deleted.');
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />

            <DropdownMenu>
                {/* DropdownMenuTrigger */}
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <LuMoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>

                {/* DropdownMenuContent */}
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => onCopy(data.id)}
                    >
                        <FaRegCopy className="mr-2 h-4 w-4" /> Copy Id
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => router.push(`/admin/grid-contents/${data.id}`)}
                    >
                        <FaRegEdit className="mr-2 h-4 w-4" /> Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    onClick={() => setOpen(true)}
                    >
                        <MdDelete className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>
        </>
    )
}
