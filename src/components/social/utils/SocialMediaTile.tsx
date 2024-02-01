"use client";

import { motion } from "framer-motion";
import { ImMail } from "react-icons/im";
import { SiDiscord, SiTelegram, SiTiktok } from "react-icons/si";
import { BsGithub, BsTwitter, BsReddit, BsLinkedin } from "react-icons/bs";

interface PageProps {
  social: {
    id: number;
    title: string;
    desc: string;
    link: string;
    bgClass: string;
  };
}

const SocialMediaTile = ({ social }: PageProps) => {
  const { id, title, desc, link, bgClass } = social;
  return (
    <motion.div
      onClick={() => {
        if (id === 6) {
          alert("SIKE!! You wish!! LOOL");
        } else {
          window.open(link, "_target");
        }
      }}
      className={`cursor-pointer flex items-center w-fit rounded-lg ${bgClass}
                w-full gap-3 py-1
                sm:pl-6 sm:gap-6 sm:py-3
                xmmd:w-[90%]
                xl:w-3/4`}
    >
      {/* icons */}
      <div className="text-5xl">
        {id === 0 && (
          <div className="text-[#181717]">
            <BsGithub />{" "}
          </div>
        )}
        {id === 1 && (
          <div className="text-[#FF4500]">
            {" "}
            <SiTelegram />{" "}
          </div>
        )}
        {id === 2 && (
          <div className="text-[#D14836]">
            {" "}
            <ImMail />{" "}
          </div>
        )}
        {id === 3 && (
          <div className="text-[#7289DA]">
            {" "}
            <SiDiscord />{" "}
          </div>
        )}
      </div>

      {/* title/desc */}
      <div className="flex flex-col">
        {/* title */}
        <div className="text-lg sm:text-xl font-bold">{title}</div>

        {/* desc */}
        <div className="text-base sm:text-lg tracking-tight font-semibold text-gray-500">
          {desc}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMediaTile;
