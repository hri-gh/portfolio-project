

import { TiThMenu, } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";


import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import MobNavLinks from './mobile-nav-links';


export function MobileSideNav() {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden md:hidden mt-4 mx-3">
                <Button variant="outline" className=''><TiThMenu className="w-6" /></Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-transparent border-none shadow-current">
                <div className=" mt-5">
                    <MobNavLinks />
                </div>
                <SheetFooter className="icon flex items-center">
                    <SheetClose asChild>
                        <Button className="absolute bottom-0 mb-2" variant="destructive" type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
