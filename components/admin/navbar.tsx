import MainNav from "@/components/admin/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserButton } from "../user-button"
import { UserButtonMenu } from "./user-button-menu"

function Navbar() {

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <UserButtonMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
