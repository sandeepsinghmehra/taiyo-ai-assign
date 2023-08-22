import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { buttonVariants } from './ui/button';
import { cn } from './lib/utils';


function Sidebar({ className, ...props }:any) {
    let location = useLocation();
    return (
        <nav
            className={cn(
            "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full border",
            className
            )}
            {...props}
        >
            <NavLink
                to={'/'}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    location.pathname === "/" ?  "bg-muted-foreground text-white hover:bg-muted" :"hover:bg-transparent hover:underline",
                    "justify-start rounded-none"
                    )
                }
            >
                Contacts
            </NavLink>
            <NavLink
                to={'/dashboard'}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    location.pathname === "/dashboard" ?  "bg-muted-foreground text-white" :"hover:bg-transparent hover:underline",
                    "justify-start rounded-none"
                    )
                }
            >
                Dashboard
            </NavLink>
        </nav>
    );
}

export default Sidebar;
