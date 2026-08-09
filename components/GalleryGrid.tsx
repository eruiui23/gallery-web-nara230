'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Photo } from '@/lib/cloudinary';
import { Lightbox } from './Lightbox';

type GalleryGridProps = {
  mobileCols: Photo[][];
  desktopCols: Photo[][];
};

export function GalleryGrid({ mobileCols, desktopCols }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  // 1. State to control the camera flash overlay
  const [isFlashing, setIsFlashing] = useState(false);

  // 2. Trigger the camera flash and open the lightbox simultaneously
  const handlePhotoClick = (photo: Photo) => {
    setIsFlashing(true);
    setSelectedPhoto(photo);
  };

  return (
    <>
      {/* CAMERA FLASH OVERLAY */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0 }}
            /* Keyframe animation: Spikes to solid white fast, then fades out */
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.35, times: [0, 0.2, 1], ease: "easeOut" }}
            onAnimationComplete={() => setIsFlashing(false)}
            className="fixed inset-0 z-[100] bg-black pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden gap-4">
        {mobileCols.map((colPhotos, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-4">
            {colPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
                className="bg-neutral-900 group cursor-pointer overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt="Gallery Photo"
                  width={photo.width}
                  height={photo.height}
                  sizes="50vw"
                  className="w-full h-auto object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex gap-10">
        {desktopCols.map((colPhotos, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-10">
            {colPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
                className="bg-neutral-900 group cursor-pointer overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt="Gallery Photo"
                  width={photo.width}
                  height={photo.height}
                  sizes="33vw"
                  className="w-full h-auto object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <Lightbox
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
