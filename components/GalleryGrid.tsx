"use client";

import { useState, useEffect } from "react";
import { Photo, getImagesFromFolder } from "@/lib/cloudinary";
import ImageContainer from "./ImageContainer";
import { useInView } from "react-intersection-observer";

type Props = {
    // photos: Photo[];
    initialPhotos: Photo[];
    initialCursor?: string;
    folderName: string;
};

// Image ordering algorithm
function getBalancedColumns(photos: Photo[], numCols: number): Photo[][] {
    const columns: Photo[][] = Array.from({ length: numCols }, () => []);
    const colHeights: number[] = new Array(numCols).fill(0);

    photos.forEach((photo) => {
        const imageRatio = photo.height / photo.width;
        const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
        columns[shortestColIndex].push(photo);
        colHeights[shortestColIndex] += imageRatio;
    });

    return columns;
}

export default function GalleryGrid({
    initialPhotos,
    initialCursor,
    folderName,
}: Props) {
    const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
    const [cursor, setCursor] = useState<string | undefined>(initialCursor);
    const [isLoading, setIsLoading] = useState(false);

    const { ref, inView } = useInView();

    useEffect(() => {
        async function loadMorePhotos() {
            if (isLoading || !cursor) return;

            setIsLoading(true);

            try {
                const res = await getImagesFromFolder(folderName, cursor);

                setPhotos((prev) => [...prev, ...res.photos]);

                setCursor(res.next_cursor);
            } catch (error) {
                console.error("Error loading more photos:", error);
            } finally {
                setIsLoading(false);
            }
        }

        if (inView && cursor) {
            loadMorePhotos();
        }
    }, [inView, cursor, isLoading]);

    const mobileCol = getBalancedColumns(photos, 2);
    const desktopCol = getBalancedColumns(photos, 3);

    return (
        <main className="max-w-350 ">
            <div className="flex md:hidden gap-10">
                {mobileCol.map((bucket, bucketIdx) => (
                    <div
                        key={bucketIdx}
                        className="flex-1 flex flex-col gap-10"
                    >
                        {bucket.map((photo) => (
                            <ImageContainer photo={photo} key={photo.id} />
                        ))}
                    </div>
                ))}
            </div>

            <div className="hidden md:flex gap-10">
                {desktopCol.map((bucket, bucketIdx) => (
                    <div
                        key={bucketIdx}
                        className="flex-1 flex flex-col gap-10"
                    >
                        {bucket.map((photo) => (
                            <ImageContainer photo={photo} key={photo.id} />
                        ))}
                    </div>
                ))}
            </div>
            {cursor && (
                <div
                    ref={ref}
                    className="w-full py-10 flex justify-center items-center mt-10"
                >
                    {/* You can replace this text with a spinner or a colored placeholder later! */}
                    {isLoading ? (
                        <div className="mb-5 flex flex-row justify-center gap-3.5 items-center">
                            <span className="loading loading-ring loading-xl"></span>
                            <div className="list">Loading...</div>
                        </div>
                    ) : (
                        <div className="h-10"></div>
                    )}
                </div>
            )}
        </main>
    );
}
