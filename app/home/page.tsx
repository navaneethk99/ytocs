import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHeadphones,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    title:
      "Why Choosing the Web Domain Can Launch Your Tech Career Faster Than You Think!",
    channel: "HTML Loverz",
    views: "1.2M views • 2 weeks ago",
  },
  {
    title:
      "Design Domain Explained: Where Creativity Meets Real-World Problem Solving",
    channel: "Figma Paglus",
    views: "1.2M views • 2 weeks ago",
  },
  {
    title:
      "The Truth About the App Domain: Build Apps That Actually Make an Impact!",
    channel: "Redbull Enthusiasts",
    views: "1.2M views • 2 weeks ago",
  },
  {
    title: "The Management Domain: Mastering Leadership in the Tech World",
    channel: "Introverted Extroverts",
    views: "1.2M views • 2 weeks ago",
  },
  {
    title:
      "Why the Competitive Coding Domain Is Every Tech Student’s Secret Weapon",
    channel: "Hashmap Sexual",
    views: "1.2M views • 2 weeks ago",
  },
  {
    title: "Inside the Research Domain: How Innovation Starts from Curiosity",
    channel: "Aura Farmers",
    views: "1.2M views • 2 weeks ago",
  },
];
const linkedvideos = [
  {
    title:
      "InspiHER Season 4, Bonus Episode: Tanvi Shah, Founder and Creative Director of Saltie",
    views: "111 views • 2 months ago",
    videoid: "NKB6waEMy98",
  },
  {
    title:
      "InspiHER Season 4, Episode 3: Shubhangi Gupta, GDG Noida Organiser and Women Techmakers Ambassador",
    views: "263 views • 2 months ago",
    videoid: "lHDsi5wtj44",
  },
  {
    title:
      "InspiHER Season 4, Episode 2: Muskan Agarwal, Founder at Cherry Media, ex-Amazon and GHC Scholar",
    views: "182 views • 2 months ago",
    videoid: "FNBmFbB6fvE",
  },
  {
    title:
      "“Computers Have Feelings Too” | Dr. Peter Robinson, University of Cambridge | DSP May 2025",
    views: "111 views • 4 months ago",
    videoid: "YEY1P62zAf8",
  },
  {
    title: "Opening Ceremony | Cryptic Hunt 4.0 | graVITas 2025",
    views: "543 views • 1 month ago",
    videoid: "tHOMKNF29u4",
  },
  {
    title: "Cryptic Hunt 2024 - The Aftermovie",
    views: "148 views • 11 months ago",
    videoid: "FF5XqPccatk",
  },
];
const Page = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-[#181818]">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full h-20 bg-[#181818] flex items-center pl-20">
        <h1 className="font-bold text-xl">Organising Committee Selections</h1>
      </div>

      {/* Side Bar */}
      <div className="fixed top-0 left-0 w-20 h-screen bg-[#181818] z-20 px-1">
        <div className="w-full h-20 flex justify-center items-center">
          <div className="w-5 h-5">
            <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col hover:bg-[#282828] py-4 rounded-md">
          <FontAwesomeIcon icon={faHome} className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold mt-2">Home</p>
        </div>
        <div className="flex items-center justify-center flex-col hover:bg-[#282828] py-4 rounded-md">
          <FontAwesomeIcon icon={faHeadphones} className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold mt-2 line-clamp-1">Interview</p>
        </div>
        <div className="flex items-center justify-center flex-col hover:bg-[#282828] py-4 rounded-md">
          <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold mt-2">Final</p>
        </div>
        <div className="flex items-center justify-center flex-col hover:bg-[#282828] py-4 rounded-md">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold mt-2">You</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20 mt-20 pr-4">
        <h1 className="px-4 font-bold text-xl pt-4">Recommended Videos</h1>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 pt-2 p-4">
          {videos.map((video, index) => (
            <div key={index} className="h-fit">
              <div className="w-full h-full bg-white border aspect-video"></div>
              <div className="flex mt-2 gap-2">
                <div className="bg-white w-11 h-11 aspect-square rounded-full"></div>
                <div>
                  <p className="font-semibold line-clamp-2">{video.title}</p>
                  <p className="text-gray-400 text-sm font-semibold">
                    {video.channel}
                  </p>
                  <p className="text-gray-400 text-sm font-semibold">
                    {video.views}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="px-4 font-bold text-xl pt-4">Trending Videos</h1>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 pt-2 p-4">
          {linkedvideos.map((video, index) => (
            <Link
              href={`https://www.youtube.com/watch?v=${video.videoid}`}
              key={index}
              className="h-fit"
            >
              <div className="w-full h-full aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoid}/hqdefault.jpg`}
                  alt="video thumbnail"
                  className="w-full h-full object-cover"
                  width={9999}
                  height={9999}
                />
              </div>
              <div className="flex mt-2 gap-2">
                <div className="w-11 h-11 aspect-square rounded-full">
                  <Image
                    src={`https://yt3.googleusercontent.com/pkzP9B9FarjW5b8gUyOglcUyLBs6UYVuEnkoGYvpgoT3RCNLrgaSwr-Z-TeM287XRt6i8qzZGw=s160-c-k-c0x00ffffff-no-rj`}
                    alt="video thumbnail"
                    className="w-full h-full object-cover rounded-full"
                    width={9999}
                    height={9999}
                  />
                </div>
                <div>
                  <p className="font-semibold line-clamp-2">{video.title}</p>
                  <p className="text-gray-400 text-sm font-semibold">
                    Association for Computing Machinery
                  </p>
                  <p className="text-gray-400 text-sm font-semibold">
                    {video.views}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
