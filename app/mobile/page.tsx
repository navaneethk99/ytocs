import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#121212] mobile-only">
      {/* <h1 className="text-center font-semibold text-xl pt-5">
        Organising Committee Selections
      </h1> */}
      <div className="w-full max-w-3xl mx-auto aspect-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video"
          allow="autoplay"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-full h-full px-4 mt-4">
        <h1 className="text-white font-semibold text-lg">
          Did you really try to apply for a tech chapter on your mobile?
        </h1>
        <h2 className="text-gray-400">1.7B views 15 years ago</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-[10vw] aspect-square rounded-full">
            <Image
              src={`https://yt3.googleusercontent.com/vewxKdtll-rntHAMDPY_Qa6hPac3-J2sCFFUwvGSSR0i7hB4g5rNfF39lCEcjGvsYI0RWx7V1A=s160-c-k-c0x00ffffff-no-rj`}
              alt="video thumbnail"
              className="w-full h-full object-cover rounded-full"
              width={9999}
              height={9999}
            />{" "}
          </div>
          <p className="font-semibold">Rick Astley</p>
          <p className="text-gray-400">4.41M</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
