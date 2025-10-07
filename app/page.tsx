import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link
        href="/home"
        className="w-fit h-fit flex justify-center items-center flex-col cursor-pointer desktop-only"
      >
        <FontAwesomeIcon icon={faPowerOff} className="mb-2" />
        <p className="font-bold">Power On</p>
      </Link>
      <Link
        href="/mobile"
        className="w-fit h-fit flex justify-center items-center flex-col cursor-pointer mobile-only"
      >
        <FontAwesomeIcon icon={faPowerOff} className="mb-2" />
        <p className="font-bold">Power On</p>
      </Link>
    </div>
  );
};

export default Page;
