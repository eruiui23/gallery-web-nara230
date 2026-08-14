import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import GalleryGrid from "./GalleryGrid";

type Props = {
    folderName?: string;
};

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    const photos = await getImagesFromFolder(folderName);

    return (
        <div className="flex justify-center mx-4">
            <GalleryGrid photos={photos} />
        </div>
    );
}
