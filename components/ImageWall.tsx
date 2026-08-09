import { getImagesFromFolder, Photo } from "@/lib/cloudinary";
import { GalleryGrid } from "@/components/GalleryGrid";

type Props = {
    folderName?: string;
};

// Aspect-ratio height balancing algorithm to ensure level column bottoms
function getBalancedColumns(photos: Photo[], numCols: number): Photo[][] {
    const columns: Photo[][] = Array.from({ length: numCols }, () => []);
    const colHeights: number[] = new Array(numCols).fill(0);

    photos.forEach((photo) => {
        const ratio = photo.height / photo.width;

        let shortestColIndex = 0;
        for (let i = 1; i < numCols; i++) {
            if (colHeights[i] < colHeights[shortestColIndex]) {
                shortestColIndex = i;
            }
        }

        columns[shortestColIndex].push(photo);
        colHeights[shortestColIndex] += ratio;
    });

    return columns;
}

export default async function GalleryPage({
    folderName = "Nara230/Test",
}: Props) {
    // 1. Fetch raw photo data on the server
    const rawPhotos = await getImagesFromFolder(folderName);

    // 2. Reverse array so newest/latest photos appear first
    const photos = [...rawPhotos].reverse();

    // 3. Pre-calculate height-balanced columns for mobile and desktop
    const mobileCols = getBalancedColumns(photos, 2);
    const desktopCols = getBalancedColumns(photos, 3);

    return (
        <main className="max-w-350 min-h-screen py-4 px-4 self-center">
            {/* 4. Pass pre-calculated columns to the interactive Client Component */}
            <GalleryGrid mobileCols={mobileCols} desktopCols={desktopCols} />
        </main>
    );
}
