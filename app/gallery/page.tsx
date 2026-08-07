import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import  GalleryCard from "./GalleryCard";

export default async function GalleryPage() {
    const photos = await getImagesFromFolder("Nara230/Test");

    return (
        <div className="mt-40 flex justify-center">
            <div className="w-3/4 grid grid-cols-3 gap-8 justify-items-center">
                <GalleryCard
                    title="classmeet"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                />
                <GalleryCard
                    title="diangkat"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773989118/R0011648_web_jkp8tg.jpg"
                />
                <GalleryCard
                    title="graduation"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959934/DSCF7683_mixhic.jpg"
                />
                <GalleryCard
                    title="classmeet"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                />
                <GalleryCard
                    title="diangkat"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773989118/R0011648_web_jkp8tg.jpg"
                />
                <GalleryCard
                    title="graduation"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959934/DSCF7683_mixhic.jpg"
                />
                <GalleryCard
                    title="classmeet"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                />
                <GalleryCard
                    title="diangkat"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773989118/R0011648_web_jkp8tg.jpg"
                />
                <GalleryCard
                    title="graduation"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959934/DSCF7683_mixhic.jpg"
                />
                <GalleryCard
                    title="classmeet"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                />
                <GalleryCard
                    title="diangkat"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773989118/R0011648_web_jkp8tg.jpg"
                />
                <GalleryCard
                    title="graduation"
                    src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959934/DSCF7683_mixhic.jpg"
                />
            </div>
        </div>
    );
}
