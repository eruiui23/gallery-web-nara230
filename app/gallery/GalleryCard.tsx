"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  src: string;
};

// export default function GalleryCard({ title, src }: Props) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const callIsLoaded = () => setIsLoaded(true);

//   return (
//     <motion.div
//       className="w-full border-4 border-white"
//       initial={{ opacity: 0  }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3}}
//     >
//       <div className=" w-full bg-white relative">
//         <Image
//           src={src}
//           alt="test"
//           width={600}
//           height={400}
//           sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//           className={`hover:scale-105 duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
//           onLoad={callIsLoaded}
//         />
//         <div
//           className={`thinfont absolute bottom-0.5 left-1.5 text-3xl sm:text-xl md:text-xl lg:text-4xl text-balance  text-white  text-shadow-md/20 ${isLoaded ? "opacity-100" : "opacity-0"}`}
//         >
//           {title}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

export default function GalleryCard({ title, src }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const callIsLoaded = () => setIsLoaded(true);

  return (
    <motion.div
      className="w-full bg-white p-2  cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" w-full bg-white overflow-hidden">
        <Image
          src={src}
          alt="test"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 50vw, 33vw"
          className={`group-hover:scale-105 group-hover:opacity-80 duration-300 object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={callIsLoaded}
        />
      </div>

      <div className="flex flex-row justify-between thinfont pt-2 px-1 text-xl sm:text-sm md:text-base xl:text-xl text-black font-medium group-hover:text-black/80 duration-300 ">
        <div className="group-hover:underline underline-offset-4 text-nowrap">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
