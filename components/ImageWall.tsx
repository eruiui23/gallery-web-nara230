import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";

type Props = {
    folderName?: string;
};

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    const photos = await getImagesFromFolder(folderName);

    return (
        <main className="max-w-350 min-h-screen py-4 px-4 self-center">
            {/* CSS Columns Masonry Grid */}
            <div className="columns-2 md:columns-3 gap-10 space-y-10">
                {photos.map((photo: Photo) => (
                    <div
                        key={photo.id}
                        className="break-inside-avoid bg-neutral-900 group cursor-pointer"
                    >
                        <Image
                            src={photo.src}
                            alt="Gallery Photo"
                            width={photo.width}
                            height={photo.height}
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="w-full h-auto object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
