import { getImagesFromFolder } from "@/lib/cloudinary";
import GalleryGrid from "./GalleryGrid";

type Props = {
    folderName?: string;
};

export default async function ImageWall({
    folderName = "Nara230/Test",
}: Props) {
    const res = await getImagesFromFolder(folderName);

    return (
        <div className="flex justify-center mx-4 min-h-screen">
            <GalleryGrid initialPhotos={res.photos} initialCursor={res.next_cursor} folderName={folderName}/>
        </div>
    );
}
