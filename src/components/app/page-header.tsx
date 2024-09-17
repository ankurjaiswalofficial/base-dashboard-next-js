import React from 'react'
import {
    BellDotIcon,
    ChevronDown,
    Menu,
    MessageSquareMoreIcon,
    Search,
    SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import PageSidebar from './page-sidebar'


function PageHeader() {
    return (
        <header className="flex h-14 items-center gap-4 border-b border-neutral-100 px-4 lg:h-16 lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden border-0 text-muted-foreground"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col bg-white text-black dark:bg-black dark:text-white">
                    <PageSidebar />
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <form className='hidden md:block'>
                    <div className="relative w-fit bg-muted/40 border rounded-md max-w-sm flex-grow">
                        <Input
                            type="search"
                            placeholder="Search "
                            className="w-full appearance-none pr-8 shadow-none border-none"
                        />
                        <Search className="absolute right-2.5 top-[50%] translate-y-[-50%] h-4 w-4 text-muted-foreground" />
                    </div>
                </form>
                <Button variant={"ghost"} size={"icon"} className='md:hidden size-auto p-1 rounded-full' >
                    <SearchIcon className='size-5' />
                </Button>
            </div>
            <Button variant={"ghost"} size={"icon"} className='size-auto p-1 rounded-full' >
                <BellDotIcon className='size-5' />
            </Button>
            <Button variant={"ghost"} size={"icon"} className='size-auto p-1 rounded-full' >
                <MessageSquareMoreIcon className='size-5' />
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex flex-row items-center justify-center gap-2 px-0.5">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <span className="text-base font- hidden sm:block">Admirra John</span>
                        <ChevronDown className='size-4 ml-1' />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default PageHeader
