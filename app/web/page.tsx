import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHeadphones,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const videos = [
    {
      title:
        "Design Domain Explained: Where Creativity Meets Real-World Problem Solving",
      channel: "Figma Paglus",
      views: "1.2M views • 2 weeks ago",
      thumbnail: "design",
      route: "design",
    },
    {
      title:
        "The Truth About the App Domain: Build Apps That Actually Make an Impact!",
      channel: "Redbull Enthusiasts",
      views: "1.2M views • 2 weeks ago",
      thumbnail: "app",
      route: "app",
    },
    {
      title: "The Management Domain: Mastering Leadership in the Tech World",
      channel: "Introverted Extroverts",
      views: "1.2M views • 2 weeks ago",
      thumbnail: "mgmt",
      route: "mgmt",
    },
    {
      title:
        "Why the Competitive Coding Domain Is Every Tech Student’s Secret Weapon",
      channel: "Hashmaps & Pointers",
      views: "1.2M views • 2 weeks ago",
      thumbnail: "cc",
      route: "cc",
    },
    {
      title: "Inside the Research Domain: How Innovation Starts from Curiosity",
      channel: "Aura Farmers",
      views: "1.2M views • 2 weeks ago",
      thumbnail: "research",
      route: "research",
    },
  ];
  const comments = [
    {
      username: "JohnDoe",
      profilepic: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in frameworks like Next.js, and when would you choose one over the other?",
      likes: 10,
    },
    {
      username: "JaneSmith",
      profilepic: "https://randomuser.me/api/portraits/men/2.jpg",
      comment:
        "How does an API route work in Next.js or Express.js, and what are the advantages of using middleware for request validation or authentication?",
      likes: 5,
    },
    {
      username: "TechGuru",
      profilepic: "https://randomuser.me/api/portraits/men/3.jpg",
      comment:
        "What are the key differences between hosting a static website on Vercel versus deploying a full-stack web app on AWS or Render, and how do environment variables work in each?",
      likes: 8,
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
  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-[#181818] desktop-only">
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
        <Link
          href="/home"
          className="flex items-center justify-center flex-col hover:bg-[#282828] py-4 rounded-md"
        >
          <FontAwesomeIcon icon={faHome} className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold mt-2">Home</p>
        </Link>
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
      <div className="ml-20 mt-20">
        <div className="flex">
          <div className="w-[70%]">
            <div className="bg-white w-full aspect-video">
              <Image
                src="/thumbnails/web.png"
                alt="video thumbnail"
                className="w-full h-full object-cover"
                width={9999}
                height={9999}
              />
            </div>
            <h1 className="text-white font-semibold text-xl mt-4">
              Why Choosing the Web Domain Can Launch Your Tech Career Faster
              Than You Think!
            </h1>
            <div className="flex gap-5 items-center mt-3">
              <div className="w-12 aspect-square bg-white rounded-full"></div>
              <div>
                <p className="text-md font-semibold">HTML Loverz</p>
                <p className="text-xs text-gray-400">1M Subscribers</p>
              </div>
              <div className="flex bg-[#353535] text-white px-4 py-2 gap-3 rounded-full ml-auto hover:cursor-pointer">
                <FontAwesomeIcon icon={faThumbsUp} className="w-5 h-6" />
                <p className="">3.5k</p>
                <p className="">|</p>
                <FontAwesomeIcon icon={faThumbsDown} className="w-5 h-6" />
              </div>
              <div className="flex bg-[#353535] text-white px-4 py-2 gap-3 rounded-full hover:cursor-pointer">
                <FontAwesomeIcon icon={faShare} className="w-5 h-6" />
                <p className="">Share</p>
              </div>
              <div className="text-black bg-white px-4 py-2 rounded-full hover:cursor-pointer">
                Subscribe
              </div>
            </div>
            <div className="py-5 border-t border-[#555555] mt-5">
              <h1 className="text-xl font-bold">10 Comments</h1>
            </div>
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-5 mt-4">
                <div className="aspect-square w-12 h-12 rounded-full">
                  <Image
                    src={comment.profilepic}
                    alt="profile pic"
                    className="w-full h-full object-cover rounded-full"
                    width={9999}
                    height={9999}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{comment.username}</p>
                  <p className="text-white">{comment.comment}</p>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="w-5 h-4 mr-1"
                    />
                    <p className="text-[#999999]">{comment.likes}</p>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className="w-5 h-4 ml-5"
                    />
                    <div className="text-white ml-10 font-semibold hover:bg-[#353535] hover:cursor-pointer px-4 py-2 rounded-full">
                      Reply
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 w-[30%]">
            {videos.map((video, index) => (
              <div key={index} className="flex mb-5">
                <div className="w-[180px] aspect-video flex-shrink-0">
                  <Image
                    src={`/thumbnails/${video.thumbnail}.png`}
                    alt="video thumbnail"
                    className="w-full h-full object-cover rounded-md"
                    width={9999}
                    height={9999}
                  />
                </div>
                <div>
                  <p className="font-semibold line-clamp-2 text-sm ml-4">
                    {video.title}
                  </p>
                  <p className="line-clamp-2 text-xs ml-4 mt-1 text-[#999999]">
                    {video.channel}
                  </p>
                  <p className="line-clamp-2 text-xs ml-4 mt-1 text-[#999999]">
                    {video.views}
                  </p>
                </div>
              </div>
            ))}
            {linkedvideos.map((video, index) => (
              <div key={index} className="flex mb-5">
                <div className="w-[180px] aspect-video flex-shrink-0">
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoid}/hqdefault.jpg`}
                    alt="video thumbnail"
                    className="w-full h-full object-cover rounded-md"
                    width={9999}
                    height={9999}
                  />
                </div>
                <div>
                  <p className="font-semibold line-clamp-2 text-sm ml-4">
                    {video.title}
                  </p>
                  <p className="line-clamp-2 text-xs ml-4 mt-1 text-[#999999]">
                    Association for Computing Machinery (ACM-VIT)
                  </p>
                  <p className="line-clamp-2 text-xs ml-4 mt-1 text-[#999999]">
                    {video.views}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
