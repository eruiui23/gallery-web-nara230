import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import ImageContainer from "./ImageContainer";

type Props = {
    folderName?: string;
};

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    const photos = await getImagesFromFolder(folderName);

    return (
        <main className="max-w-350 min-h-screen py-4 px-4 self-center">
            <div className="columns-2 md:columns-3 gap-10 space-y-10">
                {photos.map((photo: Photo) => (
                    <ImageContainer key={photo.id} photo={photo}/>
                ))}
            </div>
        </main>
    );
}
