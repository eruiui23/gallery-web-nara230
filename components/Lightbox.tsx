"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Photo } from "@/lib/cloudinary";
import { createPortal } from "react-dom";

type LightBoxProps = {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
};

type CloseButtonProps = {
  onClose: () => void;
};

type LeftArrowProps = {
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
};

type RightArrowProps = {
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  totalPhotos: number;
};

type ImageTapNavigationProps = {
  currentIndex: number | null;
  onNavigate: (newIndex: number) => void;
  totalPhotos: number;
};

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-6 right-6 text-white z-50 p-2 opacity-70 hover:opacity-100 transition-opacity"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
}

function LeftArrow({ currentIndex, onNavigate }: LeftArrowProps) {
  return (
    <>
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="hidden sm:block absolute left-0 xl:left-4 text-white z-50 py-10 opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-18"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

function RightArrow({ currentIndex, onNavigate, totalPhotos }: RightArrowProps) {
  return (
    <>
      {currentIndex < totalPhotos - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="hidden sm:block absolute right-0 xl:right-4 text-white z-50 py-10 opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-18"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

function ImageTapNavigation({
  currentIndex,
  onNavigate,
  totalPhotos,
}: ImageTapNavigationProps) {
  if (currentIndex === null) return null;

  return (
    <div className="block sm:hidden">
      {/* Left Invisible Touch Area (Previous) */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute inset-y-0 left-0 w-1/2 z-40 outline-none cursor-pointer"
          aria-label="Previous photo"
        />
      )}

      {/* Right Invisible Touch Area (Next) */}
      {currentIndex < totalPhotos - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute inset-y-0 right-0 w-1/2 z-40 outline-none cursor-pointer"
          aria-label="Next photo"
        />
      )}
    </div>
  );
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightBoxProps) {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    if (currentIndex === null) {
      document.body.style.overflow = "auto";
      return;
    }
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && currentIndex < photos.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {currentIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
          onClick={onClose}
        >
          {/*buttons*/}
          <CloseButton onClose={onClose} />
          <LeftArrow currentIndex={currentIndex} onNavigate={onNavigate} />
          <RightArrow currentIndex={currentIndex} onNavigate={onNavigate} totalPhotos={photos.length} />

          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedImages.includes(currentIndex) ? 1 : 0 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full h-full max-w-7xl max-h-[90vh] mx-10 md:mx-20 flex items-center justify-center px-10 sm:px-20"
            >
              <ImageTapNavigation
                currentIndex={currentIndex}
                onNavigate={onNavigate}
                totalPhotos={photos.length}
              />
              <Image
                src={photos[currentIndex].src}
                alt="Enlarged gallery photo"
                width={photos[currentIndex].width}
                height={photos[currentIndex].height}
                className="object-contain w-full h-full max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
                unoptimized
                priority
                onLoad={() => {
                  setLoadedImages((prev) =>
                    prev.includes(currentIndex)
                      ? prev
                      : [...prev, currentIndex],
                  );
                }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
