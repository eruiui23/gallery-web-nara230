"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  src: string;
};

export default function GalleryCard({ title, src }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const callIsLoaded = () => setIsLoaded(true);

  return (
    <motion.div
      className="w-full border-4 border-white"
      initial={{ opacity: 0  }}
      animate={{ opacity: 100 }}
      transition={{ duration: 0.3}}
    >
      <div className=" w-full bg-white relative">
        <Image
          src={src}
          alt="test"
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={`hover:scale-105 duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={callIsLoaded}
        />
        <div
          className={`thinfont absolute bottom-0.5 left-1.5 text-3xl sm:text-xl md:text-xl lg:text-4xl text-balance  text-white font-medium text-shadow-md/30 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {title}
        </div>
      </div>
    </motion.div>
  );
}

// <div className="w-full bg-white p-2  cursor-pointer group">
// <div className=" w-full bg-white overflow-hidden">
//   <Image
//     src={src}
//     alt="test"
//     width={1200}
//     height={800}
//     sizes="(max-width: 768px) 50vw, 33vw"
//     className="group-hover:scale-110 duration-300 object-cover"
//   />
// </div>

// <div className="flex flex-row justify-between thinfont pt-2 px-1 text-xs sm:text-sm md:text-base xl:text-xl text-black font-medium group-hover:text-black/80 duration-300 ">
//   <div className="">{title}</div>
//   <div className="">06/25</div>
// </div>
// </div>
