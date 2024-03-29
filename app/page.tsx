import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center text-center min-h-screen">
        <section className="w-full  bg-center bg-hero-pattern bg-cover ">
          <div className=" bg-gradient-to-t from-transparent from-20%  to-secondary py-80">
            <h1 className=" text-5xl m-5 font-semibold text-primary-foreground">
              Get cozy and toasty
            </h1>
            <p className=" m-5 text-primary-foreground text-xl">
              {" "}
              Discover all the equipments and tools Luke uses on his trips!{" "}
            </p>
            <Link href={"/trips"} className="">
              <Button>Take a look</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export const runtime = "edge";
