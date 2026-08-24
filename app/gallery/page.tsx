import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import GalleryCard from "./GalleryCard";
import Link from "next/link";
import GalleryTabs from "@/components/GalleryTabs";
import { div } from "motion/react-client";

// nanti taro key
const myTabs = [
  {
    id: "street",
    label: "Street",
    content: (

      <div className="flex flex-col just" key="street">
        <div className="max-w-350 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center">
          <Link href="gallery/MalamTahunBaru2024">
            <GalleryCard
              title="New Year's Eve 2024"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg"
            />
          </Link>
        </div>
      </div>

    ) ,
  },
  {
    id: "highschool",
    label: "High School",
    content: (
      <div className="flex flex-col" key="hs">
        <div className="max-w-350 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center">
          <Link href="/gallery/classmeet">
            <GalleryCard
              title="Classmeet"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
            />
          </Link>
          <Link href="gallery/Uprak">
            <GalleryCard
              title="uprak"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507500/DSCF6732_web_xzbt1h.jpg"
            />
          </Link>
        </div>

      </div>
    ),
  },
  {
    id: "college",
    label: "College",
    content: (

      <div className="flex flex-col" key="street">
        <div className="max-w-450 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center ">
          <Link href="gallery/MalamTahunBaru2024">
            <GalleryCard
              title="New Year's Eve 2024"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg"
            />
          </Link>
          <Link href="/gallery/classmeet">
            <GalleryCard
              title="Classmeet"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
            />
          </Link>
          <Link href="gallery/Uprak">
            <GalleryCard
              title="uprak"
              src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507500/DSCF6732_web_xzbt1h.jpg"
            />
          </Link>

        </div>
      </div>

    ) ,
  },
  // {
  //   id: "others",
  //   label: "others",
  //   content: (
  //     <div>yaho</div>
  //   )
  // },
];

export default async function GalleryPage() {
  const photos = await getImagesFromFolder("Nara230/Test");


  return (
    <div className="mt-30 flex justify-center mx-auto w-7/8">
        <GalleryTabs tabs={myTabs}/>
    </div>
  );
}
