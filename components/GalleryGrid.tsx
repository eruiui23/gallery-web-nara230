"use client";

import { Photo } from "@/lib/cloudinary";
import ImageContainer from "./ImageContainer";

type Props = {
    photos: Photo[];
};

// Image ordering algorithm
function getBalancedColumns(photos: Photo[], numCols: number): Photo[][] {
    const columns: Photo[][] = Array.from({ length: numCols }, () => []);

    photos.forEach((photo, index) => {
        const colIndex = index % numCols;
        columns[colIndex].push(photo);
    });

    return columns;
}

export default function GalleryGrid({ photos }: Props) {
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
                    <div key={bucketIdx} className="flex-1 flex flex-col gap-10">
                        {bucket.map((photo) => (
                            <ImageContainer photo={photo} key={photo.id}/>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}
