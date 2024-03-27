import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-evenly flex-1 fixed bottom-0">
      <Button variant={"ghost"}>
        <Link href="https://youtube.com/outdoorboys" target="_blank">
          Channel
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link href="https://youtube.com/outdoorboys" target="_blank">
          Channel
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link href="https://youtube.com/outdoorboys" target="_blank">
          Channel
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link href="https://youtube.com/outdoorboys" target="_blank">
          Channel
        </Link>
      </Button>
    </div>
  );
};

export default Footer;
