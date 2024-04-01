"use client";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import path from "path";

const paths = [
  { name: "Home", path: "/" },
  { name: "Trips", path: "/trips" },
  { name: "Support", path: "/support" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b-2">
      <nav className=" max-w-screen-2xl mx-auto">
        <div className="flex flex-row items-center justify-between ">
          <div className="mx-10 my-5 text-2xl font-semibold">
            <Link href="/">OutdoorBoys Store</Link>
          </div>

          <div className="md:hidden mx-10">
            <Sheet>
              <SheetTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Outdoorboys Store</SheetTitle>
                  <SheetDescription>
                    <ul className=" flex-col justify-evenly align-middle items-center">
                      {paths.map((path, index) => (
                        <li
                          key={index}
                          className="mt-10 text-foreground hover:text-muted-foreground"
                        >
                          <Link
                            href={path.path}
                            className={
                              pathname == path.path ? " text-primary" : ""
                            }
                          >
                            {path.name}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-10">
                        <ModeToggle />
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <ul className="hidden md:flex flex-row justify-evenly align-middle items-center">
            {paths.map((path, index) => (
              <li key={index} className="mr-10 hover:text-muted-foreground">
                <Link
                  href={path.path}
                  className={pathname == path.path ? " text-primary" : ""}
                >
                  {path.name}
                </Link>
              </li>
            ))}
            <li className="mr-10">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
