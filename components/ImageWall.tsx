import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import GalleryGrid from "./GalleryGrid";

type Props = {
    folderName?: string;
};

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    const res = await getImagesFromFolder(folderName);

    return (
        <div className="flex justify-center mx-4">
            <GalleryGrid photos={res.photos} />
        </div>
    );
}
