import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { fetcher } from "@/lib/fetcher";
import getApiURL from "@/lib/getApiURL";
import { Equipment } from "@/lib/interface";
import EquipmentRow from "@/components/equipmentrow";
import { Key } from "react";

export default async function Home() {
  const data = await fetcher(`${getApiURL()}/api/equipments?populate=*`);
  const featuredEquipments: Equipment[] = data?.data.slice(0, 3);

  return (
    <>
      <div className="relative w-full flex flex-col items-center  min-h-screen mb-2">
        <section className=" max-w-screen-2xl w-full text-center ">
          <div className=" bg-center bg-hero-pattern bg-cover rounded-b-2xl">
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
          </div>
        </section>
        <section className=" max-w-screen-2xl w-full py-8 ">
          <h1 className=" text-4xl m-5 font-semibold ">Featured Gear</h1>
          <div className="space-y-4 flex flew-wrap">
            {data ? (
              featuredEquipments.map((equipment: Equipment, key: Key) => (
                <EquipmentRow key={key} {...equipment}></EquipmentRow>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
