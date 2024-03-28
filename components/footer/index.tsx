import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-evenly flex-1 relative bottom-0 border-t-2 p-4">
      <span>
        {" "}
        This website is not affiliated with the youtube channel{" "}
        <Link
          href="https://youtube.com/outdoorboys"
          target="_blank"
          className=" underline"
        >
          Outdoorboys
        </Link>{" "}
      </span>
    </div>
  );
};

export default Footer;
