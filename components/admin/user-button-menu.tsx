"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toast from "react-hot-toast";

import { UserButton } from "../user-button"
import { useLogout } from '@/hooks/use-logout'
import { useState } from "react"

import { AlertModal } from "@/components/modals/alert-modal";

export function UserButtonMenu() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { handleLogout } = useLogout()

    // const onLogout = () => {
    //     handleLogout()
    // }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={async () => {
                    try {
                        setLoading(true);
                        await handleLogout()
                    } catch (error) {
                        toast.error('Something went wrong');
                    } finally {
                        setOpen(false);
                        setLoading(false);
                    }
                }}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                    <Button size={"icon"} className="rounded-full p-4"><UserButton /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        onClick={(e: React.MouseEvent) => {
                            setOpen(true)
                        }}
                        className="cursor-pointer"
                    >
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
