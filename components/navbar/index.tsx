"use client";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <div className="flex flex-row items-center justify-between border-b-2">
          <div className="mx-10 my-5">OutdoorBoys</div>
          <ul className="flex flex-row justify-evenly align-middle items-center">
            <li className="mr-10 hover:text-muted-foreground ">
              <Link href="/" className={pathname == "/" ? " text-primary" : ""}>
                Home
              </Link>
            </li>
            <li className="mr-10 hover:text-muted-foreground">
              <Link
                href="/trips"
                className={
                  pathname.split("/")[1] == "trips" ? " text-primary" : ""
                }
              >
                Trips
              </Link>
            </li>
            <li className="mr-10 hover:text-muted-foreground">
              <Link
                href="/support"
                className={
                  pathname.split("/")[1] == "support" ? "text-primary" : ""
                }
              >
                Support
              </Link>
            </li>
            <li className="mr-10">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
