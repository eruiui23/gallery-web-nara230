"use client";

import { useState, useEffect, useCallback } from "react";
import { Photo, getImagesFromFolder } from "@/lib/cloudinary";
import ImageContainer from "./ImageContainer";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });
import { motion } from "motion/react";

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

const MotionImageContainer = motion.create(ImageContainer);

export default function GalleryGrid({
  initialPhotos,
  initialCursor,
  folderName,
}: Props) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [cursor, setCursor] = useState<string | undefined>(initialCursor);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    // Push the hash to the URL without reloading the page!
    window.history.pushState(null, "", `#p-${index}`);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    // Clean up the URL when closing
    window.history.pushState(null, "", window.location.pathname);
  };

  const loadMorePhotos = useCallback(async () => {
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
  }, [isLoading, cursor, folderName]);

  // intersection observer effect
  useEffect(() => {
    if (inView && cursor) {
      setTimeout(() => {
        loadMorePhotos();
      }, 0);
    }
  }, [inView, cursor, loadMorePhotos]);

  // Lightbox pre-fetcher effect
  useEffect(() => {
    if (
      selectedIndex !== null &&
      selectedIndex >= photos.length - 3 &&
      cursor
    ) {
      setTimeout(() => {
        loadMorePhotos();
      }, 0);
    }
  }, [selectedIndex, photos.length, cursor, loadMorePhotos]);

  const mobileCol = getBalancedColumns(photos, 2);
  const desktopCol = getBalancedColumns(photos, 3);

  const mapImage = (bucket: Photo[], bucketIdx: number) => (
    <div key={bucketIdx} className="flex-1 flex flex-col gap-10">
      {bucket.map((photo, photoIdx) => {
        const globalIndex = photos.findIndex((p) => p.id === photo.id);

        return (
          <MotionImageContainer
            photo={photo}
            key={photo.id}
            preload={photoIdx < 2}
            onClick={() => openLightbox(globalIndex)}

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: (globalIndex % 25) * 0.1, //25 is the fetch size
            }}
          />
        );
      })}
    </div>
  );

  return (
    <main className="max-w-350 ">
      {/* mobile */}
      <div className="flex md:hidden gap-10">{mobileCol.map(mapImage)}</div>

      {/* desktop */}
      <div className="hidden md:flex gap-10">{desktopCol.map(mapImage)}</div>

      {cursor && (
        <div
          ref={ref}
          className="w-full py-10 flex justify-center items-center mt-10"
        >
         {isLoading ? (
            <div className="mb-5 flex flex-row justify-center gap-3.5 items-center">
              <span className="loading loading-spinner loading-l text-white"></span>
              <div className="list">Loading...</div>
            </div>
          ) : (
            <div className="h-10"></div>
          )}
        </div>
      )}
      <Lightbox
        photos={photos}
        currentIndex={selectedIndex}
        onClose={closeLightbox}
        onNavigate={(newIndex) => {
          setSelectedIndex(newIndex);
          window.history.pushState(null, "", `#photo-${newIndex}`);
        }}
      />
    </main>
  );
}
