"use client";
import React from 'react';
import Link from "next/link";
import {
    Bell,
    CircleUser,
    Headphones,
    Home,
    LineChart,
    Menu,
    Package2,
    Search,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react";
import { cn } from '@/lib/utils';

function PageSidebar() {
    // Define menu items with corresponding icons and names
    const menuItems = [
        [Home, 'Dashboard'],
        [Search, 'Recruitment'],
        [Bell, 'Schedule'],
        [Users, 'employee'],
        [ShoppingCart, 'department'],
    ];
    const menuItems2 = [
        [Headphones, 'Support'],
        [Settings, 'Settings'],
    ];

    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center px-4 lg:h-16 lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6" />
                    <span className="text-2xl">Vasitum</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <span className='text-xs uppercase px-3 my-3'>Main menu</span>
                    {menuItems.map((val, index) => {
                        const Icon = val[0];
                        const name: string = val[1];
                        return (
                            <Link
                                key={"SidebarButton__" + String(index)}
                                href="#"
                                className={cn("flex items-center gap-5 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary text-base capitalize", {"text-orange-600": true})}
                            >
                                <Icon className="size-5" />
                                {name}
                            </Link>
                        );
                    })}
                    <span className='text-xs uppercase px-3 my-3 mt-6'>Other</span>
                    {menuItems2.map((val, index) => {
                        const Icon = val[0];
                        const name: string = val[1];
                        return (
                            <Link
                                key={"SidebarButton__" + String(index)}
                                href="#"
                                className={cn("flex items-center gap-5 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary text-base capitalize", {"text-orange-600": true})}
                            >
                                <Icon className="size-5" />
                                {name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="mt-auto p-4"></div>
        </div>
    );
}

export default PageSidebar;
