"use client"
import { Photo } from "@/lib/cloudinary";
import Image from "next/image";
import { useState } from "react";

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <div
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            className="bg-neutral-900 group cursor-pointer relative w-full"
        >

            <Image
                src={photo.src}
                alt="Gallery Photo"
                width={photo.width}
                height={photo.height}
                // fill={true}
                sizes="(max-width: 768px) 50vw, 33vw"
                // className=" object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
                className={`
                                    object-cover transition-all duration-700 ease-in-out
                                    group-hover:brightness-75 group-hover:scale-105
                                    ${isLoading ? "opacity-0 blur-sm" : "opacity-100 blur-0"}
                                `}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}
