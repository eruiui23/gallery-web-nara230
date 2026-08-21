"use client";
import { Photo } from "@/lib/cloudinary";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  photo: Photo;
  preload?: boolean;
  onClick?: () => void;
  ref?: React.Ref<HTMLDivElement>;
};

export default function ImageContainer({
  photo,
  preload = false,
  onClick,
  ref,
  ...props
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);

  // Hidrate first and then load images
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadImage(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div ref={ref} {...props} className="w-full">
      <div
        style={{
          aspectRatio: `${photo.width} / ${photo.height}`,
          backgroundColor: photo.color,
        }}
        onClick={onClick}
        className="bg-neutral-900 group cursor-pointer relative w-full"
      >
        {shouldLoadImage && (
          <Image
            src={photo.src}
            alt="Gallery Photo"
            width={photo.width}
            height={photo.height}
            preload={preload}
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`
                      object-cover transition-all duration-700 ease-in-out
                      group-hover:scale-105
                      ${isLoading ? "opacity-0 blur-md" : "opacity-100 blur-0"}
                    `}
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    </div>
  );
}
