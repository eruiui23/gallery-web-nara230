import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";

type Props = {
    folderName?: string;
};

export default async function GalleryPage({folderName = "Nara230/Test"}: Props ) {
    const photos = await getImagesFromFolder(folderName);

    return (
        <main className="w-full min-h-screen bg-black px-4 py-8 md:px-8">
            {/* CSS Columns Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {photos.map((photo: Photo) => (
                    <div
                        key={photo.id}
                        className="break-inside-avoid overflow-hidden bg-neutral-900 group cursor-pointer"
                    >
                        <Image
                            src={photo.src}
                            alt="Gallery Photo"
                            width={photo.width}
                            height={photo.height}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
                        />
                    </div>
                ))}
            </div>
            <p className="text-black">wowwowow</p>
        </main>
    );
}
