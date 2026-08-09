import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";

type Props = {
    folderName?: string;
};

// Helper function: Calculates total aspect ratios to keep column bottoms level
function getBalancedColumns(photos: Photo[], numCols: number): Photo[][] {
    const columns: Photo[][] = Array.from({ length: numCols }, () => []);
    const colHeights: number[] = new Array(numCols).fill(0);

    photos.forEach((photo) => {
        // 1. Calculate relative height ratio (height / width)
        const ratio = photo.height / photo.width;

        // 2. Find which column is currently the shortest
        let shortestColIndex = 0;
        for (let i = 1; i < numCols; i++) {
            if (colHeights[i] < colHeights[shortestColIndex]) {
                shortestColIndex = i;
            }
        }

        // 3. Append photo to the shortest column and update its total height
        columns[shortestColIndex].push(photo);
        colHeights[shortestColIndex] += ratio;
    });

    return columns;
}

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    const photos = (await getImagesFromFolder(folderName)).reverse();

    // Pre-calculate balanced layouts for mobile (2 cols) and desktop (3 cols)
    const mobileCols = getBalancedColumns(photos, 2);
    const desktopCols = getBalancedColumns(photos, 3);

    return (
        <main className="max-w-350 min-h-screen py-4 px-4 self-center">
            {/* MOBILE LAYOUT (2 Balanced Columns) */}
            <div className="flex md:hidden gap-10">
                {mobileCols.map((colPhotos, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col gap-10">
                        {colPhotos.map((photo) => (
                            <GalleryCard key={photo.id} photo={photo} sizes="50vw" />
                        ))}
                    </div>
                ))}
            </div>

            {/* DESKTOP LAYOUT (3 Balanced Columns) */}
            <div className="hidden md:flex gap-10">
                {desktopCols.map((colPhotos, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col gap-10">
                        {colPhotos.map((photo) => (
                            <GalleryCard key={photo.id} photo={photo} sizes="33vw" />
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}

function GalleryCard({ photo, sizes }: { photo: Photo; sizes: string }) {
    return (
        <div className="bg-neutral-900 group cursor-pointer">
            <Image
                src={photo.src}
                alt="Gallery Photo"
                width={photo.width}
                height={photo.height}
                sizes={sizes}
                className="w-full h-auto object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
            />
        </div>
    );
}
