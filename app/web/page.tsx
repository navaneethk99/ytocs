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
            <div className="bg-white w-full aspect-video"></div>
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
            <div className="h-100 w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
