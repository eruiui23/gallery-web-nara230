import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import GalleryCard from "./GalleryCard";
import Link from "next/link";

export default async function GalleryPage() {
    const photos = await getImagesFromFolder("Nara230/Test");

    return (
        <div className="mt-35 flex justify-center">
            <div className="max-w-350 px-4 grid grid-cols-2 md:grid-cols-3  gap-8 justify-items-center">
                <Link href="/gallery/classmeet">
                    <GalleryCard
                        title="Classmeet"
                        src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                    />
                </Link>
                <Link href="gallery/MalamTahunBaru2024">
                    <GalleryCard
                        title="New Years Eve 2024"
                        src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg"
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
    );
}
