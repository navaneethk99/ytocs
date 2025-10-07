import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  const comments = [
    {
      username: "JohnDoe",
      comment: "Great video! Really enjoyed the content.",
    },
    { username: "JaneSmith", comment: "Thanks for sharing this!" },
    { username: "TechGuru", comment: "Very informative and well explained." },
    { username: "Coder123", comment: "Loved the examples used in the video." },
    { username: "DesignFan", comment: "The visuals were stunning!" },
    { username: "MusicLover", comment: "The background music was perfect." },
    {
      username: "MovieBuff",
      comment: "Can't wait to see more from this channel.",
    },
    {
      username: "Traveler",
      comment: "This inspired me to explore new places.",
    },
    { username: "Foodie", comment: "Now I'm craving some delicious food!" },
    { username: "FitnessFreak", comment: "Motivated me to hit the gym!" },
    {
      username: "NatureLover",
      comment: "The outdoor shots were breathtaking.",
    },
    { username: "HistoryBuff", comment: "Learned so much from this video." },
    {
      username: "ScienceGeek",
      comment: "Fascinating insights into the topic.",
    },
    {
      username: "ArtEnthusiast",
      comment: "The creativity was off the charts!",
    },
    { username: "BookWorm", comment: "Added this to my watch later list." },
  ];
  return (
    <div className="w-screen h-screen bg-[#121212] mobile-only">
      {/* <h1 className="text-center font-semibold text-xl pt-5">
        Organising Committee Selections
      </h1> */}
      <div className="w-full max-w-3xl mx-auto aspect-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
          title="YouTube video"
          allow="autoplay"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-full px-4 mt-4">
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
          <Link
            href="https://www.youtube.com/@RickAstleyYT?sub_confirmation=1"
            className="ml-auto bg-red-600 px-3 py-2 rounded-full font-semibold"
          >
            Subscribe
          </Link>
        </div>
        <div className="border border-[#505050] rounded-xl mt-5 bg-[#191919] h-120 relative overflow-hidden">
          {/* Scrollable comments container */}
          <div className="overflow-y-auto h-full pt-16 px-4">
            {/* Add top padding equal to input container height */}
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-2 mt-4">
                <div className="aspect-square w-14 h-14 bg-white rounded-full"></div>
                <div>
                  <p className="text-white font-semibold">{comment.username}</p>
                  <p className="text-gray-300">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed input container with fade at the bottom */}
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="relative">
              <div className="flex gap-2 items-center px-4 py-3 bg-[#191919]">
                <input
                  className="w-full text-lg py-2 px-5 bg-[#555555] text-white rounded-full"
                  placeholder="Add Comment"
                />
                <div className="flex items-center justify-center bg-[#555555] aspect-square w-14 rounded-full cursor-pointer text-3xl">
                  +
                </div>
              </div>

              {/* Fade overlay at bottom of input container */}
              <div className="absolute -bottom-4 left-0 w-full h-4 pointer-events-none bg-gradient-to-b from-[#191919] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
