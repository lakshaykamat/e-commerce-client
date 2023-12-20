import Link from "next/link";
import { Button } from "./button";
import { ModeToggle } from "./ModeToggle";
import { CircleUserRound, LogOut, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const NAV_LINKS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];
const Navbar = () => {
  const navItems = NAV_LINKS.map((link, id) => {
    return (
      <Link key={id} href={link.path}>
        <Button variant={"ghost"}>{link.label}</Button>
      </Link>
    );
  });
  return (
    <header className="flex justify-around py-4 border-b-2 border-gray-300 dark:border-gray-800">
      <h3>BoAt Ahead</h3>
      {/* <div className="flex sm:hidden gap-3 items-center justify-center"> */}
      <MobileNavbar />
      {/* <ModeToggle /> */}
      {/* </div> */}
      <div className="hidden sm:flex items-center gap-3">
        {navItems}
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/lakshaykamat.png" />
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <CircleUserRound className="w-5 h-5" />
              <div className="ml-2">Profile</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="w-5 h-5" />
              <div className="ml-2">Log Out</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

const MobileNavbar = () => {
  const navItems = NAV_LINKS.map((link, id) => {
    return (
      <Link key={id} href={link.path} className="w-full">
        <Button variant={"ghost"} className="w-full">
          {link.label}
        </Button>
      </Link>
    );
  });
  return (
    <div className="flex sm:hidden gap-3 items-center justify-center">
      <div className="justify-center sm:hidden flex gap-3 items-center">
        {/* <Button variant={"outline"} size={"icon"}> */}
          <Sheet>
            <SheetTrigger>
            {/* <Button variant={"outline"} size={"icon"}> */}
              <Menu />
            {/* </Button> */}
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Admin Panel</SheetTitle>
                <SheetDescription className="grid grid-cols-1 gap-3 place-content-start place-items-start">
                  {navItems}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        {/* </Button> */}
        <ModeToggle />
      </div>
    </div>
  );
};
export default Navbar;
